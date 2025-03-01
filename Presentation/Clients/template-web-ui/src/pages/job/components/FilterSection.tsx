import React from "react";
import { Form, Dropdown, Input } from "semantic-ui-react";
import { TurkeyCitiesFilter } from "../../../domain/common/cities";

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
  queryCategory,
  categoryOptions,
}) => {
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
        <label>Category</label>
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
        <label>Location</label>
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
        <label>Salary Range</label>
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
