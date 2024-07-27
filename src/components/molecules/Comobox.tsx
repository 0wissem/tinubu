import React, { SyntheticEvent, useCallback, useMemo } from "react";
import { Autocomplete, AutocompleteProps } from "@mui/material";
import { styled } from "@mui/system";
import { AutocompleteRenderInputParams } from "@mui/material/Autocomplete";
import { IAddress } from "contexts/AddressProvider";

interface IComboBox {
  value: ComoboxOption | null;
  setValue: Function;
  options: ComoboxOption[];
  renderInput: (params: AutocompleteRenderInputParams) => React.ReactNode;
  readableLabelKey: keyof IAddress;
}
export type SpecialOptionType = {
  isSpecial: boolean;
  renderOption: () => React.ReactNode;
  onClick: () => void;
};
export type ComoboxOption = IAddress | SpecialOptionType;

const StyledAutocomplete = styled(
  (
    props: AutocompleteProps<string | ComoboxOption, boolean, boolean, boolean>
  ) => <Autocomplete {...props} />
)(() => ({
  "& .MuiAutocomplete-popupIndicator": {
    transform: "none",
  },
  "& .MuiAutocomplete-popupIndicatorOpen": {
    transform: "none",
  },
}));

const ComboBox = ({
  value,
  setValue,
  options,
  readableLabelKey,
  renderInput,
  ...props
}: IComboBox) => {
  const renderOption = useCallback(
    (
      props: React.HTMLAttributes<HTMLLIElement> & {
        key: any;
      },
      option: string | ComoboxOption
    ) => {
      try {
        if (typeof option === "string") {
          return option;
        } else if ("isSpecial" in option && option.isSpecial) {
          return (
            <li
              {...props}
              key={props.key}
              style={{
                borderBottom: "solid",
                borderBottomColor: "#00000011",
                height: 36,
              }}
            >
              {option.renderOption()}
            </li>
          );
        }
        const addressOption = option as IAddress;

        return (
          <li
            {...props}
            key={props.key}
            style={{
              borderBottom: "solid",
              borderBottomColor: "#00000011",
              height: 36,
            }}
          >
            {addressOption[readableLabelKey] ?? ""}
          </li>
        );
      } catch (error) {
        console.warn(error, "in renderOption");
      }
    },
    []
  );
  const componentsProps = useMemo(
    () => ({
      popper: {
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 3],
            },
          },
        ],
      },
    }),
    []
  );

  const getOptionLabel = useCallback(
    (option: string | ComoboxOption): string => {
      try {
        if (typeof option === "string") {
          return option;
        } else if (
          typeof option === "object" &&
          "isSpecial" in option &&
          option.isSpecial
        ) {
          return "";
        }
        const addressOption = option as IAddress;
        return addressOption[readableLabelKey] ?? "";
      } catch (error) {
        console.warn(error, "in getOptionLabel");
        return "";
      }
    },
    []
  );
  const onChange = useCallback(
    (event: SyntheticEvent<Element, Event>, option: any) => {
      try {
        if (
          // !!option ensure that option is not null
          // purpose: searching "isSpecial" in option keys.
          !!option &&
          typeof option === "object" &&
          "isSpecial" in option &&
          option.isSpecial
        ) {
          option.onClick();
        } else {
          setValue(option);
        }
      } catch (error) {
        console.warn(error, "in onChange");
      }
    },

    []
  );
  return (
    <StyledAutocomplete
      disablePortal
      freeSolo
      id="combo-box-demo"
      sx={{ mt: "16px" }}
      renderInput={renderInput}
      fullWidth
      value={value}
      onChange={onChange}
      componentsProps={componentsProps}
      renderOption={renderOption}
      options={options}
      getOptionLabel={getOptionLabel}
      {...props}
    />
  );
};
export default ComboBox;
