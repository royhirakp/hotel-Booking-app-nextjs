import BackDrop from "@/muiCoustomComponent/BackDrop";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface MeterialUiSelectProps {
  register: any;
  handleSubmit: any;
  errors: any;
  fromState: any;
  emalValidatinS: any;
  mobileValidation: any;
  setMobileValidation: any;
  setemalValidatinS: any;
}

export default function MultiStepFormSingup1(props: MeterialUiSelectProps) {
  const {
    register,
    handleSubmit,
    errors,
    fromState,
    emalValidatinS,
    mobileValidation,
    setMobileValidation,
    setemalValidatinS,
  } = props;
  const [mobileinputDisabkleS, setMobileinputDisable] = useState(true);
  const [otoError, setOTPerror] = useState(false);
  const [otpInput, setOtpinput] = useState("");
  const [otpVarification, setotpVarification] = useState(true);
  //bacdrop state
  const [open, setOpen] = useState(false);
  function handelOtpSubmit() {
    if (otpInput === "000") {
      setOTPerror(true);
      return;
    } else {
      setOTPerror(false);
      //backdrop logic
      setOpen(true);

      setTimeout(() => {
        setOpen(false);
        setotpVarification(false);
      }, 2000);
    }
  }
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          padding: "10px 20px 5px 0",
          height: "100%",
        }}
      >
        <>
          <FirstNameLastName
            emalValidatinS={emalValidatinS}
            setMobileValidation={setMobileValidation}
            mobileValidation={mobileValidation}
            setemalValidatinS={setemalValidatinS}
            fromState={fromState}
            errors={errors}
            register={register}
            handleSubmit={handleSubmit}
          />
        </>

        <Box
          sx={{
            width: "100%",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-around",
            // background: "blue",
            height: "70%",
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          {/* email */}
          <Box
            flex={1}
            sx={{
              width: "100%",
              alignItems: "center",
              display: "flex",
              justifyContent: "space-around",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
          >
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              sx={{
                width: { xs: "90%", sm: "90%" },
                // height: "75px",
                // fontSize: "50px",
              }}
              {...register("email", {})}
              error={!emalValidatinS}
              helperText={
                !emalValidatinS
                  ? "Please enter a valid email address"
                  : "*optional"
              }
              onChange={(e) => {
                if (e.target.value.length < 6) return;

                const pattern =
                  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;

                if (pattern.test(e.target.value)) {
                  console.log("String matches the pattern");
                  setemalValidatinS(pattern.test(e.target.value));
                } else {
                  console.log("String does not match the pattern");
                  setemalValidatinS(pattern.test(e.target.value));
                }
              }}
            />
          </Box>
          {/* mobile */}
          <Stack
            flex={1}
            sx={{
              flexDirection: { xs: "row", sm: "column" },
              // padding: { xs: 1, sm: 1 },
              width: "40%",
              minWidth: "200px",
            }}
          >
            {/* backdrop */}
            <BackDrop open={open} setOpen={setOpen} />

            {/* backdrop */}

            <Box
              sx={{
                width: "100%",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "secondary.dark",
                boxShadow: "1px 1px 1px",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "10px 0 0 9px ",
              }}
            >
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                {/* mobile text fild */}
                <Stack direction="column">
                  <TextField
                    id="outlined-basic"
                    type="number"
                    label="Mobile"
                    variant="outlined"
                    {...register("mobile")}
                    error={!mobileValidation}
                    disabled={!mobileinputDisabkleS}
                    helperText={!mobileValidation ? "invalid Mobile" : ""}
                    sx={{
                      // width: { xs: "90%", sm: "45%" },
                      //   height: "75px",
                      //   border: "1px solid",

                      ...{
                        ".MuiOutlinedInput-input": {},
                      },
                    }}
                    onChange={(e) => {
                      if (e.target.value.length < 6) return;

                      console.log(e.target.value);
                      const pattern = /^\d{10}$/;

                      if (pattern.test(e.target.value)) {
                        console.log("String matches the pattern");
                        setMobileValidation(pattern.test(e.target.value));
                      } else {
                        console.log("String does not match the pattern");
                        setMobileValidation(pattern.test(e.target.value));
                      }
                    }}
                  />
                  {/* varify button */}
                  <Stack sx={{ width: "50%" }}>
                    <Button
                      onClick={() => {
                        // function for otp
                        console.log(fromState);
                        if (!mobileValidation) return;
                        setMobileinputDisable(false);
                      }}
                      sx={{
                        "&.MuiButton-root": {
                          padding: 0,
                        },
                      }}
                    >
                      Varify
                    </Button>
                  </Stack>
                </Stack>

                {/* varified icon */}
                <Box sx={{ minWidth: "25px", paddingTop: "10px" }}>
                  <Box
                    sx={{
                      display: `${otpVarification ? "none" : "block"}`,
                    }}
                  >
                    <CheckCircleIcon sx={{ color: "blue" }} />
                  </Box>
                </Box>
              </Stack>

              <Stack
                flexDirection="row"
                sx={{ width: "100%" }}
                justifyContent="space-evenly"
              >
                <Box>
                  <Typography style={{ margin: "0px", marginTop: "5px" }}>
                    Enter OTP
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    type="number"
                    variant="outlined"
                    error={otoError}
                    disabled={!otpVarification}
                    onChange={(e) => {
                      setOtpinput(e.target.value);
                    }}
                    helperText={otoError ? "invalid otp" : ""}
                    sx={{
                      height: "45px",
                      maxWidth: "90px",
                      minWidth: "50px",
                      ".MuiOutlinedInput-input": {
                        padding: "2px",
                        fontSize: {
                          xs: "12px",
                          sm: "12px",
                          md: "13px",
                        },
                      },
                    }}
                  />
                </Box>
                <Stack>
                  <Button
                    sx={{
                      width: "50px",
                      marginTop: "18px",
                      "&.MuiButton-root": {
                        padding: 0,
                      },
                    }}
                    onClick={handelOtpSubmit}
                  >
                    submit
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
          {/* {errors.email && <span>email letters</span>} */}
        </Box>
      </Stack>
    </>
  );
}

// //*

// */
function FirstNameLastName(props: MeterialUiSelectProps) {
  const { register } = props;
  return (
    <Box
      sx={{
        width: "100%",
        height: "30%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <TextField
        id="outlined-basic"
        label="FirstName"
        variant="outlined"
        sx={{
          width: { xs: "90%", md: "45%" },
          height: "75px",
          ".MuiOutlinedInput-input": {
            // fontSize: "15px",
            // padding: "0",
          },
        }}
        {...register("firstname", {
          required: true,
        })}
      />
      {/* {errors.email && <span>email letters</span>} */}
      <TextField
        id="outlined-basic"
        label="LastName"
        sx={{
          width: { xs: "90%", md: "45%" },
          height: "75px",
        }}
        {...register("lastName", {
          required: true,
        })}
      />
    </Box>
  );
}
