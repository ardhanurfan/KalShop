import type { MouseEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { DotsVertical, Plus, Search, Trash } from "@nxweb/icons/tabler";
import type { PageComponent } from "@nxweb/react";

import {
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@components/material.js";
import { useCommand, useStore } from "@models/store.js";
import {
  Box,
  Button,
  Card,
  Checkbox,
  InputAdornment,
  Modal,
  OutlinedInput,
  Pagination,
  Select,
  TablePagination,
  TableSortLabel,
  Typography,
} from "@mui/material";
import { Product } from "@models/products/types";
import toTitleCase from "@lib/toTitleCase";
import toast from "react-hot-toast";

const Products: PageComponent = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [state, dispatch] = useStore((store) => store.products);
  const command = useCommand((cmd) => cmd.products);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [id, setId] = useState<number | null>(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<keyof Product>("id");
  const [selected, setSelected] = useState<readonly number[]>([]);

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [search, setSearch] = useState("");
  const [catergory, setCategory] = useState("ALL");

  const categories = useMemo(() => {
    if (!state || !state.products) {
      return [];
    }

    let categories: string[] = [];
    state.products.forEach((product) => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    });

    return categories;
  }, [state]);

  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  const productsFiltered = useMemo(() => {
    if (!state || !state.products) {
      return [];
    }
    return state.products
      .filter(
        (product) =>
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase()) ||
          product.price
            .toString()
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          product.stock
            .toString()
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          product.brand.toLowerCase().includes(search.toLowerCase()) ||
          product.discountPercentage
            .toString()
            .toLowerCase()
            .includes(search.toLowerCase())
      )
      .filter(
        (product) => product.category === catergory || catergory === "ALL"
      )
      .sort((a, b) => {
        if (order === "asc") {
          return -descendingComparator(a, b, orderBy);
        } else {
          return descendingComparator(a, b, orderBy);
        }
      });
  }, [state, orderBy, order, search, catergory]);

  const products = useMemo(() => {
    return productsFiltered.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  }, [productsFiltered, page, rowsPerPage]);

  const handleClick = (event: MouseEvent<HTMLButtonElement>, id: number) => {
    setAnchorEl(event.currentTarget);
    setId(id);
  };

  const handleClose = () => {
    setId(null);
    setAnchorEl(null);
  };

  const handleDetail = () => {
    navigate(`/products/${id}`);
  };

  const handleDelete = () => {
    if (selected.length > 0) {
      selected.forEach((id) => {
        dispatch(command.deleteProduct(id));
      });
      setSelected([]);
      setOpenDeleteModal(false);
      toast.success("Delete products success");
      return;
    }
    if (id) {
      dispatch(command.deleteProduct(id));
      handleClose();
      setOpenDeleteModal(false);
      toast.success("Delete product success");
    }
  };

  useEffect(() => {
    dispatch(command.getAllProducts());
  }, []);

  const handleEdit = () => {
    if (id) {
      dispatch(command.selectCurrentProduct(id));
    }
    navigate("/products/add");
  };

  // Table handler
  interface HeadCell {
    id: keyof Product | "action";
    disablePadding: boolean;
    label: string;
    numeric: boolean;
  }

  const headCells: readonly HeadCell[] = [
    {
      id: "id",
      numeric: true,
      disablePadding: false,
      label: "ID",
    },
    {
      id: "title",
      numeric: false,
      disablePadding: false,
      label: "Title",
    },
    {
      id: "brand",
      numeric: false,
      disablePadding: false,
      label: "Brand",
    },
    {
      id: "category",
      numeric: false,
      disablePadding: false,
      label: "Category",
    },
    {
      id: "thumbnail",
      numeric: false,
      disablePadding: false,
      label: "Thumbnail",
    },
    {
      id: "stock",
      numeric: true,
      disablePadding: false,
      label: "Stock",
    },
    {
      id: "price",
      numeric: true,
      disablePadding: false,
      label: "Price",
    },
    {
      id: "discountPercentage",
      numeric: true,
      disablePadding: false,
      label: "Discount",
    },
    {
      id: "description",
      numeric: false,
      disablePadding: false,
      label: "Description",
    },
    {
      id: "action",
      numeric: false,
      disablePadding: false,
      label: "Action",
    },
  ];

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = productsFiltered.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleSelect = (_event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  return (
    <>
      <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.background.default,
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: 8,
            borderRadius: 2,
          }}
        >
          <Typography
            id="parent-modal-title"
            variant="h3"
            component="h3"
            sx={{ mb: 4 }}
            fontWeight={700}
          >
            Delete Product
          </Typography>
          <Typography
            id="parent-modal-description"
            sx={{ mb: 8 }}
            variant="body2"
            color="text.secondary"
            component="p"
            fontWeight={500}
            fontSize={16}
          >
            Are you sure you want to delete this product?
          </Typography>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
            <Button
              sx={{ mr: 4 }}
              onClick={() => setOpenDeleteModal(false)}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button onClick={handleDelete} variant="contained" color="error">
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
      <Card>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 4,
          }}
        >
          <Select
            defaultValue={"ALL"}
            sx={{ height: 48, width: 200 }}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem key={"ALL"} value={"ALL"} sx={{ fontWeight: 700 }}>
              All Products
            </MenuItem>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {toTitleCase(category)}
              </MenuItem>
            ))}
          </Select>
          <OutlinedInput
            onChange={(e) => setSearch(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <Search height={20} width={20} />
              </InputAdornment>
            }
            placeholder="Search products"
            sx={{
              height: 48,
            }}
          ></OutlinedInput>
        </Box>
        <Box
          sx={{
            padding: 4,
            display: "flex",
            gap: 4,
            justifyContent: "end",
          }}
        >
          <Button
            sx={{ display: selected.length > 0 ? "flex" : "none" }}
            variant="contained"
            color="error"
            startIcon={<Trash height={20} width={20} />}
            onClick={() => setOpenDeleteModal(true)}
          >
            Delete
          </Button>
          <Button
            onClick={() => navigate("/products/add")}
            variant="contained"
            color="primary"
            startIcon={<Plus height={20} width={20} />}
          >
            Product
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    indeterminate={
                      selected.length > 0 &&
                      selected.length < productsFiltered.length
                    }
                    checked={
                      productsFiltered.length > 0 &&
                      productsFiltered.length === selected.length
                    }
                    onChange={handleSelectAllClick}
                    inputProps={{
                      "aria-label": "select all desserts",
                    }}
                  />
                </TableCell>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? "right" : "left"}
                    padding={headCell.disablePadding ? "none" : "normal"}
                    sortDirection={orderBy === headCell.id ? order : false}
                  >
                    <TableSortLabel
                      hideSortIcon={
                        headCell.id === "action" || headCell.id === "thumbnail"
                      }
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : "asc"}
                      onClick={() => {
                        if (
                          headCell.id !== "action" &&
                          headCell.id != "thumbnail"
                        ) {
                          setOrder(order === "asc" ? "desc" : "asc");
                          setOrderBy(headCell.id);
                        }
                      }}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      {headCell.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                    },
                    backgroundColor:
                      id === row.id ? theme.palette.divider : "inherit",
                  }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={selected.indexOf(row.id) !== -1}
                      inputProps={{
                        "aria-labelledby": row.id.toString(),
                      }}
                      onClick={(event) => handleSelect(event, row.id)}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row" align="right">
                    {row.id}
                  </TableCell>
                  <TableCell align="left">{row.title}</TableCell>
                  <TableCell align="left">{row.brand}</TableCell>
                  <TableCell align="left">
                    {toTitleCase(row.category)}
                  </TableCell>
                  <TableCell align="left">
                    <img
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                      src={row.thumbnail}
                      alt={row.title}
                    />
                  </TableCell>
                  <TableCell align="right">{row.stock}</TableCell>
                  <TableCell align="right">{"$ " + row.price}</TableCell>
                  <TableCell align="right">
                    {row.discountPercentage + " %"}
                  </TableCell>
                  <TableCell align="left">{row.description}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={(e) => handleClick(e, row.id)}>
                      <DotsVertical />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {state && state.products && (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              padding: 4,
            }}
          >
            <TablePagination
              component="div"
              count={productsFiltered.length}
              page={page - 1}
              onPageChange={(_e, newPage) => setPage(newPage + 1)}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={(e) => {
                setRowsPerPage(parseInt(e.target.value, 10));
                setPage(1);
              }}
              style={{ visibility: "hidden" }}
            />
            <Pagination
              showFirstButton
              showLastButton
              count={Math.ceil(productsFiltered.length / rowsPerPage)}
              variant="outlined"
              shape="rounded"
              color="primary"
              page={page}
              onChange={(_e, newPage) => setPage(newPage)}
            />
            <TablePagination
              component="div"
              count={productsFiltered.length}
              page={page - 1}
              rowsPerPageOptions={[10, 15, 20]}
              onPageChange={(_e, newPage) => setPage(newPage + 1)}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={(e) => {
                setRowsPerPage(parseInt(e.target.value, 10));
                setPage(1);
              }}
            />
          </Box>
        )}
      </Card>
      <Menu
        anchorEl={anchorEl}
        id="basic-menu"
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleDetail}>Detail</MenuItem>
        <MenuItem onClick={handleEdit}>Edit</MenuItem>
        <MenuItem onClick={() => setOpenDeleteModal(true)}>Delete</MenuItem>
      </Menu>
    </>
  );
};

Products.displayName = "Products";

export default Products;
