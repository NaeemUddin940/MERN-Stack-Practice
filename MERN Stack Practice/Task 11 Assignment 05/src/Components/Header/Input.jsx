import styled from "styled-components";
import { useEcommerceContext } from "../../Context/EcommerceContext";
import React, { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const Input = () => {
  const { Products, setSearchProducts, filtered, setFiltered } = useEcommerceContext();

  // Here Use Debounce
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearch = useDebounce(searchValue, 300);

  useEffect(() => {
    if (debouncedSearch === "") {
      setSearchProducts([...Products]);
      setFiltered([...Products]);
    } else {
      const filtered = Products.filter((p) =>
        p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
      setSearchProducts(filtered);
      setFiltered(filtered);
    }
  }, [debouncedSearch]);

  return (
    <StyledWrapper>
      <input
        placeholder="Type something here...."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="input placeholder:text-black dark:placeholder:text-white text-black dark:text-white"
        name="text"
        type="text"
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input {
  font-family: 'IntegralCF', sans-serif;
    border: 2px solid #8707ff;
    border-radius: 30px;
    padding: 10px 20px;
    background: transparent;
    max-width: 190px;
  }

  .input:active {
    box-shadow: 2px 2px 15px #8707ff inset;
  }
`;

export default React.memo(Input);
