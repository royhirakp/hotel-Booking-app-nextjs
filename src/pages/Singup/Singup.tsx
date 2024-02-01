"use client";
import React, { useState } from "react";
import MainContainer from "@/component/container/MainContainer";
import { Box, Stack, Typography, Button, Paper } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormControl } from "@mui/material";
import MultiStepFormSingup2 from "@/component/singupcomponents/MultiStepFormSingup2";
import MultiStepFormSingup1 from "@/component/singupcomponents/MultistepSingUpForm1";

import { useSignUpMutation } from "@/redux/apiRequest/LoginRegister";

type Inputs = {
  firstname: string;
  lastName: string;
  email: string;
  mobile: string;
  age: string;
  country: string;
  gender: string;
};

interface FormFirstPartProps {
  register: any;
  getValues: any;

  errors: any;
  handleSubmit: (
    onSubmit: SubmitHandler<Inputs>
  ) => (e: React.FormEvent) => void;
  // Add more props as needed
  fromState: number;
  emalValidatinS: boolean;
  setemalValidatinS: React.Dispatch<React.SetStateAction<boolean>>;
  mobileValidation: boolean;
  setMobileValidation: React.Dispatch<React.SetStateAction<boolean>>;
}

const Singup = () => {
  // register / singup api
  const [Singup, { isLoading }] = useSignUpMutation();

  const [fromState, setFromStae] = useState(1);
  const [emalValidatinS, setemalValidatinS] = useState(true);
  const [mobileValidation, setMobileValidation] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      // let res = await Singup({
      //   name: "test name form next app",
      //   email: "royhirakr@text.com",
      //   password: "Hirak@1234",
      // });
      // console.log("req send =", res);
      console.log(data);
      // alert("From Submited; data=>" + JSON.stringify(data));
    } catch (error) {
      console.log("cant singup error form next app catch block");
    }
  };

  function handelMultiStepForm(state: any) {
    if (!emalValidatinS || !mobileValidation) {
      alert("fix the error");
      return;
    }
    if (state == "next") {
      if (fromState == 2) return;

      setFromStae(fromState + 1);
    } else {
      if (fromState == 1) return;

      setFromStae(fromState - 1);
    }
  }

  return (
    <div style={{ height: "100%" }}>
      <MainContainer
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            width: { xs: "100%", sm: "80%", md: "75%" },
            maxWidth: "600px",
            marginTop: "25px",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              width: "100%",
            }}
            className="fromcomtainer"
          >
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <Stack>
                <Box
                  sx={{
                    textAlign: "center",
                    margin: "15px 0",
                  }}
                >
                  <Typography variant="h5">Sing Up Form </Typography>
                </Box>

                <MultiStepForm
                  setMobileValidation={setMobileValidation}
                  mobileValidation={mobileValidation}
                  setemalValidatinS={setemalValidatinS}
                  emalValidatinS={emalValidatinS}
                  handleSubmit={handleSubmit}
                  register={register}
                  errors={errors}
                  fromState={fromState}
                  getValues={getValues}
                />

                {/* {errors.password && <span>Password wilbe 8 letters</span>} */}

                <Stack direction="row" justifyContent="space-between" p={1}>
                  <Button
                    variant="outlined"
                    disabled={fromState == 1}
                    onClick={() => handelMultiStepForm("prev")}
                  >
                    prev
                  </Button>
                  <Button
                    sx={{ display: `${fromState == 2 ? "block" : "none"}` }}
                    variant="contained"
                    onClick={handleSubmit(onSubmit)}
                  >
                    register
                  </Button>
                  <Button
                    variant="outlined"
                    disabled={fromState == 2}
                    onClick={() => handelMultiStepForm("next")}
                  >
                    next
                  </Button>
                </Stack>

                <Box sx={{ width: "80%" }}>
                  <input type="submit" style={{ display: "none" }} />
                </Box>
              </Stack>
            </form>
          </Box>
        </Paper>
      </MainContainer>
    </div>
  );
};

export default Singup;

const MultiStepForm: React.FC<FormFirstPartProps> = ({
  register,
  handleSubmit,
  errors,
  fromState,
  emalValidatinS,
  mobileValidation,
  setMobileValidation,
  setemalValidatinS,
  getValues,
}) => {
  let message;

  switch (fromState) {
    case 1:
      message = (
        <>
          <MultiStepFormSingup1
            emalValidatinS={emalValidatinS}
            setMobileValidation={setMobileValidation}
            mobileValidation={mobileValidation}
            setemalValidatinS={setemalValidatinS}
            fromState={fromState}
            errors={errors}
            register={register}
            handleSubmit={handleSubmit}
            getValues={getValues}
          />
        </>
      );
      break;
    case 2:
      message = (
        <>
          <MultiStepFormSingup2
            register={register}
            handleSubmit={handleSubmit}
          />
        </>
      );
      break;

    default:
      message = "Hello!";
  }
  return (
    <>
      <FormControl
        sx={{
          width: "100%",
          height: {
            xs: "350px",
            md: "250px",
          },
          display: "flex",
          gap: 3,
          // paddingBottom: "8px",
          alignItems: "center",
          // background: "green",
        }}
      >
        {message}
      </FormControl>
    </>
  );
};
