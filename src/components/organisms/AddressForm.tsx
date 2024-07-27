import { TextField, Button, Grid, Typography } from "@mui/material";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useAddressContext } from "contexts/AddressProvider";

interface Address {
  name: string;
  address: string;
  city: string;
  country: string;
}

interface FormErrors {
  name?: string;
  address?: string;
  city?: string;
  country?: string;
}

function AddressForm() {
  const { addAddress, toggleAddressModal } = useAddressContext();
  const [formData, setFormData] = useState<Address>({
    name: "",
    address: "",
    city: "",
    country: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.country) newErrors.country = "Country is required";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    try {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length === 0) {
        addAddress(formData);
        toggleAddressModal();
      } else {
        setErrors(validationErrors);
      }
    } catch (error) {
      console.warn(error, "in handleSubmit");
    }
  };

  return (
    <div>
      <Typography sx={{ mb: "32px" }} fontSize={20} fontWeight={500}>
        Add manually
      </Typography>
      <form noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Legal name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              error={!!errors.address}
              helperText={errors.address}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              error={!!errors.city}
              helperText={errors.city}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              error={!!errors.country}
              helperText={errors.country}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              type="reset"
              variant="text"
              size="small"
              sx={{
                color: "#757575",
              }}
              onClick={toggleAddressModal}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="info"
              size="small"
              sx={{
                backgroundColor: "#26BAD4",
                "&:hover": {
                  backgroundColor: "#26BAD4", // Adjust the hover color as necessary
                },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default AddressForm;
