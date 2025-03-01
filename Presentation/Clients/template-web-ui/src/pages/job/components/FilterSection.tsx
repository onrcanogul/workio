import React from "react";
import { Form, Dropdown } from "semantic-ui-react";

interface FilterSectionProps {
  filters: {
    category: string;
    location: string;
    price: string;
    sector: string;
  };
  setFilters: (filters: {
    category: string;
    location: string;
    price: string;
    sector: string;
  }) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  filters,
  setFilters,
}) => {
  const categoryOptions = [
    { key: "dev", text: "Developer", value: "developer" },
    { key: "des", text: "Designer", value: "designer" },
  ];

  const locationOptions = [
    { key: "ny", text: "New York", value: "new_york" },
    { key: "sf", text: "San Francisco", value: "san_francisco" },
  ];

  const priceOptions = [
    { key: "low", text: "$0 - $50k", value: "low" },
    { key: "mid", text: "$50k - $100k", value: "mid" },
    { key: "high", text: "$100k+", value: "high" },
  ];

  const sectorOptions = [
    { key: "it", text: "IT", value: "it" },
    { key: "finance", text: "Finance", value: "finance" },
  ];

  return (
    <Form
      style={{
        marginTop: "100px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Form.Field>
        <label>Category</label>
        <Dropdown
          placeholder="Select Category"
          fluid
          selection
          options={categoryOptions}
          value={filters.category}
          onChange={(_, data) =>
            setFilters({ ...filters, category: data.value as string })
          }
        />
      </Form.Field>
      <Form.Field>
        <label>Location</label>
        <Dropdown
          placeholder="Select Location"
          fluid
          selection
          options={locationOptions}
          value={filters.location}
          onChange={(_, data) =>
            setFilters({ ...filters, location: data.value as string })
          }
        />
      </Form.Field>
      <Form.Field>
        <label>Salary Range</label>
        <Dropdown
          placeholder="Select Salary Range"
          fluid
          selection
          options={priceOptions}
          value={filters.price}
          onChange={(_, data) =>
            setFilters({ ...filters, price: data.value as string })
          }
        />
      </Form.Field>
      <Form.Field>
        <label>Sector</label>
        <Dropdown
          placeholder="Select Sector"
          fluid
          selection
          options={sectorOptions}
          value={filters.sector}
          onChange={(_, data) =>
            setFilters({ ...filters, sector: data.value as string })
          }
        />
      </Form.Field>
    </Form>
  );
};

export default FilterSection;
