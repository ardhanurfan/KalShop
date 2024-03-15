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
import { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDropzone } from "react-dropzone";
import { Upload } from "@nxweb/icons/tabler";

interface FileProp {
  name: string;
  type: string;
  size: number;
}

interface ProductInput {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: FileProp;
  images: FileProp[];
}

const defaultValues = {
  title: "",
  description: "",
  brand: "",
  category: "",
};

interface CategoryTypes {
  name: string;
  value: string;
}

const categories: CategoryTypes[] = [
  {
    name: "Smartphone",
    value: "smartphone",
  },
  {
    name: "Laptops",
    value: "laptops",
  },
  {
    name: "Fragrance",
    value: "fragrance",
  },
  {
    name: "Groceries",
    value: "groceries",
  },
  {
    name: "Home Decoration",
    value: "home-decoration",
  },
];

const AddForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductInput>({ defaultValues });

  const onSubmit = () => {
    errors
      ? toast.error("Please fill the required fields")
      : toast.success("Form Submitted");
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

  const img = files.map((file: FileProp) => (
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
                      <MenuItem value={category.value}>
                        {category.name}
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
                </Typography>
                <input {...getInputProps()} />
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
              <Button type="submit" variant="contained" onClick={onSubmit}>
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
