import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDropzone } from "react-dropzone";
import { Upload } from "@nxweb/icons/tabler";
import { useCommand, useStore } from "@models/store";
import toTitleCase from "@lib/toTitleCase";
import { Product } from "@models/products/types";
import { postProduct } from "@api/clients/products";
import { useNavigate } from "react-router-dom";

// interface FileProp {
//   name: string;
//   type: string;
//   size: number;
// }

let defaultValues = {
  title: "",
  description: "",
  brand: "",
  category: "",
};

const AddForm = () => {
  const navigate = useNavigate();
  const [productsState, dispatch] = useStore((store) => store.products);
  const command = useCommand((cmd) => cmd.products);
  const categories = useMemo(() => {
    if (!productsState || !productsState.products) {
      return [];
    }

    let categories: string[] = [];
    productsState.products.forEach((product) => {
      if (!categories.includes(product.category)) {
        categories.push(product.category);
      }
    });

    return categories;
  }, [productsState]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    defaultValues: productsState?.selectedProduct ?? defaultValues,
  });

  useEffect(() => {
    dispatch(command.getAllProducts());
  }, []);

  useEffect(() => {
    return () => {
      dispatch(command.clear());
    };
  }, []);

  const onSubmit: SubmitHandler<Product> = async (data) => {
    try {
      if (productsState?.selectedProduct) {
        dispatch(
          command.editProduct({
            ...data,
            thumbnail: files[0]
              ? URL.createObjectURL(files[0] as any)
              : data.thumbnail,
          })
        );
        toast.success("Product edited successfully!");
      } else {
        if (!files.length) {
          toast.error("Please upload a thumbnail.");
          return;
        }
        dispatch(
          command.addProduct({
            ...data,
            thumbnail: URL.createObjectURL(files[0] as any),
          })
        );
        toast.success("Product added successfully!");
      }
      navigate("/manage-products");
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    }
  };

  const [files, setFiles] = useState<File[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },
    onDrop: (acceptedFiles: File[]) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file)));
    },
  });

  const img = files.map((file: File) => (
    <img
      style={{ maxHeight: 430 }}
      key={file.name}
      alt={file.name}
      className="single-file-image"
      src={URL.createObjectURL(file as any)}
    />
  ));

  return (
    <Card>
      <CardHeader title="Add Product Form" />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <Controller
                name="title"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    fullWidth
                    value={value}
                    label="Product title"
                    onChange={onChange}
                    placeholder="Enter product title"
                    error={Boolean(errors.title)}
                    aria-describedby="validation-basic-title"
                    {...(errors.title && {
                      helperText: "This field is required",
                    })}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="category"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    select
                    fullWidth
                    value={value}
                    label="Category"
                    onChange={onChange}
                    placeholder="Enter product category"
                    error={Boolean(errors.category)}
                    aria-describedby="validation-basic-category"
                    {...(errors.category && {
                      helperText: "This field is required",
                    })}
                  >
                    {categories.map((category) => (
                      <MenuItem key={category} value={category}>
                        {toTitleCase(category)}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="brand"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    fullWidth
                    value={value}
                    label="Product Brand"
                    onChange={onChange}
                    placeholder="Enter product brand"
                    error={Boolean(errors.brand)}
                    aria-describedby="validation-basic-brand"
                    {...(errors.brand && {
                      helperText: "This field is required",
                    })}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="stock"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    type="number"
                    fullWidth
                    value={value}
                    label="Product Stock"
                    onChange={onChange}
                    placeholder="Enter product stock"
                    error={Boolean(errors.stock)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">pcs</InputAdornment>
                      ),
                    }}
                    aria-describedby="validation-basic-stock"
                    {...(errors.stock && {
                      helperText: "This field is required",
                    })}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="price"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    fullWidth
                    value={value}
                    label="Product Price"
                    onChange={onChange}
                    placeholder="Enter product price"
                    error={Boolean(errors.price)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">$</InputAdornment>
                      ),
                    }}
                    aria-describedby="validation-basic-price"
                    {...(errors.price && {
                      helperText: "This field is required",
                    })}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="discountPercentage"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    fullWidth
                    value={value}
                    label="Discount Percentage"
                    onChange={onChange}
                    placeholder="Enter discount percentage"
                    error={Boolean(errors.discountPercentage)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">%</InputAdornment>
                      ),
                    }}
                    aria-describedby="validation-basic-discount-percentage"
                    {...(errors.discountPercentage && {
                      helperText: "This field is required",
                    })}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="description"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField
                    multiline
                    fullWidth
                    value={value}
                    label="Description"
                    onChange={onChange}
                    placeholder="Enter product description"
                    error={Boolean(errors.description)}
                    aria-describedby="validation-basic-description"
                    {...(errors.description && {
                      helperText: "This field is required",
                    })}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                {...getRootProps({ className: "dropzone" })}
                sx={files.length ? { maxHeight: 500 } : {}}
              >
                <Typography
                  variant="body1"
                  component="h3"
                  sx={{ margin: "0px 5px 5px 5px" }}
                >
                  Thumbnail
                  <input {...getInputProps()} />
                </Typography>
                {files.length ? (
                  <Box
                    sx={{
                      border: "1px solid #dedde0",
                      padding: "20px",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    {img}
                  </Box>
                ) : productsState?.selectedProduct ? (
                  <Box
                    sx={{
                      border: "1px solid #dedde0",
                      padding: "20px",
                      borderRadius: "10px",
                      textAlign: "center",
                    }}
                  >
                    <img
                      style={{ maxHeight: 430 }}
                      key={productsState.selectedProduct.title}
                      alt={productsState.selectedProduct.title}
                      className="single-file-image"
                      src={productsState.selectedProduct.thumbnail}
                    />
                  </Box>
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      textAlign: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      border: "1px solid #dedde0",
                      borderRadius: "10px",
                      padding: "30px",
                    }}
                  >
                    <Box
                      sx={{
                        mb: 8.75,
                        width: 48,
                        height: 48,
                        display: "flex",
                        borderRadius: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#eeeeee",
                      }}
                    >
                      <Upload fontSize={20} />
                    </Box>
                    <Typography variant="h4" sx={{ mb: 2.5 }}>
                      Drop thumbnail here or click to upload.
                    </Typography>
                  </Box>
                )}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
              <Toaster />
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddForm;
