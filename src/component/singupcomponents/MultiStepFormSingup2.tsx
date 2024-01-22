import MeterialUiSelect from "@/muiCoustomComponent/MeterialUiSelect";
import { Box, Stack } from "@mui/material";

interface MeterialUiSelectProps {
  register: any;
  handleSubmit: any;
}

export default function MultiStepFormSingup2(props: MeterialUiSelectProps) {
  const { handleSubmit, register } = props;
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: "90%",
          // border: "1px solid",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            height: "50%",
          }}
        >
          <MeterialUiSelect
            selectedValue="Age Range"
            options={["18-24", "25-35", "36-46", "47 and more"]}
            formKey="age"
            handleSubmit={handleSubmit}
            register={register}
          />

          <MeterialUiSelect
            selectedValue="Country"
            options={["India", "others"]}
            formKey="country"
            handleSubmit={handleSubmit}
            register={register}
          />
          <MeterialUiSelect
            selectedValue="Gender"
            options={["Male", "Female", "Others"]}
            formKey="gender"
            handleSubmit={handleSubmit}
            register={register}
          />
          {/* {errors.email && <span>email letters</span>} */}
        </Box>
        <Box
          sx={{
            width: "100%",
            alignItems: "center",
            height: "50%",

            display: "flex",
            justifyContent: "space-around",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
          }}
        >
          {/* {errors.email && <span>email letters</span>} */}
        </Box>
      </Stack>
    </>
  );
}
