import React from "react";
import { Form, Dropdown, Input } from "semantic-ui-react";
import { TurkeyCitiesFilter } from "../../../domain/common/cities";
import { useTranslation } from "react-i18next";

interface FilterSectionProps {
  filters: {
    category: string;
    location: string;
    min: string;
    max: string;
  };
  setFilters: (filters: {
    category: string;
    location: string;
    min: string;
    max: string;
  }) => void;
  queryCategory: string;
  categoryOptions: { key; text; value }[];
}

const FilterSection: React.FC<FilterSectionProps> = ({
  filters,
  setFilters,
  // queryCategory,
  categoryOptions,
}) => {
  const { t } = useTranslation();
  return (
    <Form
      style={{
        marginTop: "120px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Form.Field>
        <label>{t("category")}</label>
        <Dropdown
          fluid
          selection
          search
          options={categoryOptions}
          value={filters.category}
          onChange={(_, data) => {
            console.log(data.value);
            setFilters({ ...filters, category: data.value as string });
          }}
        />
      </Form.Field>
      <Form.Field>
        <label>{t("location")}</label>
        <Dropdown
          fluid
          selection
          search
          options={TurkeyCitiesFilter}
          value={filters.location}
          onChange={(_, data) =>
            setFilters({ ...filters, location: data.value as string })
          }
        />
      </Form.Field>
      <Form.Field>
        <label>{t("salaryRange")}</label>
        <Input
          placeholder="Min"
          fluid
          type="number"
          selection
          value={filters.min}
          onChange={(_, data) =>
            setFilters({ ...filters, min: data.value as string })
          }
        />
        <Input
          placeholder="Max"
          type="number"
          fluid
          selection
          value={filters.max}
          onChange={(_, data) =>
            setFilters({ ...filters, max: data.value as string })
          }
        />
      </Form.Field>
    </Form>
  );
};

export default FilterSection;
