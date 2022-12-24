import { Button, Container, Grid, InputLabel, Paper,  TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';

export default function ContactUs() {
    const {
        register,
        handleSubmit,
       
        formState: { errors },
    } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Paper>
            <Container padding>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <Grid container spacing={2}>
                        <Grid className='aboutUsHead' item xs={12} sm={12} lg={12} xl={12}>
                            <Typography sx={{ fontWeight: 'bold' }} variant="h4" color="#0053ff">
                                Contact Us
                            </Typography>
                        </Grid>
                        <Grid item xs={8} sm={8} lg={8} xl={8}>
                            <InputLabel htmlFor="bootstrap-input">
                                First name*
                            </InputLabel>
                            <TextField
                                id="FirstName"
                                variant="outlined"
                                name="FirstName"
                                // label="Enter First Name "
                                // required
                                type="FirstName"
                                margin="dense"
                                size="small"
                                fullWidth
                                // onChange={(e) => setFirstName(e.target.value)}
                                {...register("firstName", {
                                    required: "First Name is required.",
                                })}
                                error={Boolean(errors.firstName)}
                                helperText={errors.firstName?.message}

                            />
                        </Grid>
                        <Grid item xs={4} sm={4} lg={4} xl={4}>
                            <InputLabel htmlFor="bootstrap-input">
                                Last Name*
                            </InputLabel>
                            <TextField
                                id="Last Name"
                                variant="outlined"
                                name="Last Name"
                                // label="Enter First Name "
                                // required
                                type="Last Name"
                                margin="dense"
                                size="small"
                                fullWidth
                                // onChange={(e) => setFirstName(e.target.value)}
                                {...register("lastName", {
                                    required: "Last Name is required.",
                                })}
                                error={Boolean(errors.lastName)}
                                helperText={errors.lastName?.message}

                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12} xl={12}>
                            <InputLabel htmlFor="bootstrap-input">
                                Email*
                            </InputLabel>
                            <InputLabel htmlFor="bootstrap-input">
                                Please only include the email address associated with your account.
                            </InputLabel>

                            <TextField
                                id="Email"
                                variant="outlined"
                                name="Email"
                                // label="Enter First Name "
                                // required
                                type="Email"
                                margin="dense"
                                size="small"
                                fullWidth
                                // onChange={(e) => setFirstName(e.target.value)}
                                {...register("Email", {
                                    required: "Email is required.",
                                })}
                                error={Boolean(errors.Email)}
                                helperText={errors.Email?.message}

                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12} xl={12}>
                            <InputLabel htmlFor="bootstrap-input">
                                Subject*
                            </InputLabel>

                            <TextField
                                id="Subject"
                                variant="outlined"
                                name="Subject"
                                label="Ex. My lists aren’t showing on my homepage where I open my app."

                                type="Subject"
                                margin="dense"
                                size="small"
                                fullWidth
                                // onChange={(e) => setFirstName(e.target.value)}
                                {...register("Subject", {
                                    required: "Subject is required.",
                                })}
                                error={Boolean(errors.Subject)}
                                helperText={errors.Subject?.message}

                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12} xl={12}>
                            <InputLabel htmlFor="bootstrap-input">
                                How can we help you today*
                            </InputLabel>
                            <InputLabel htmlFor="bootstrap-input">
                                Please only include the email address associated with your account.
                            </InputLabel>


                            <TextField
                                id="How can we help you today*"
                                variant="outlined"
                                name="How can we help you today*"
                                label="Please Select "
                                // required
                                select
                                type="How can we help you today*"
                                margin="dense"
                                size="small"
                                fullWidth
                                // onChange={(e) => setFirstName(e.target.value)}
                                {...register("Howcanwehelpyoutoday", {
                                    required: "How can we help you today* is required.",
                                })}
                                error={Boolean(errors.Howcanwehelpyoutoday)}
                                helperText={errors.Howcanwehelpyoutoday?.message}

                            />
                        </Grid>

                        <Grid item xs={12} sm={12} lg={12} xl={12}>
                            <InputLabel htmlFor="bootstrap-input">
                                Do you have any additional details that we should know about?
                            </InputLabel>
                            <InputLabel htmlFor="bootstrap-input">
                                Include anything that you weren’t able to capture.
                            </InputLabel>


                            <TextField
                                fullWidth
                                rows={3}
                                label="Ex. I work for X Company and I am looking to partner with FixNow"
                            // style={{ width: "100%", height: "50%" }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={12} xl={12} style={{ paddingBottom: "50px" }}>
                            <Button variant="contained" type="submit">
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </Paper>

    )
}
