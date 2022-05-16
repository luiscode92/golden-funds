import React from 'react'
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";


function SidebarSection({
  icon,
  title,
  linkTo,
  onClick
}) {
  console.log(title)
  return (
    <Section onClick={onClick}>
      <Link to={linkTo}> 
          <span>
            {icon}
          </span>
          <span style={{marginLeft: '10px'}}>
            {title}
          </span>
      </Link>
    </Section>
  )
}

export default SidebarSection


const Section = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  padding-right: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
  font-size: 0.85em;
  transition: none;
  cursor: pointer;
  &:hover {
    background-color: grey;
    border-radius: 25px;
    color: white;
  }
  &.active {
    color: white;
    background-color: #007aff;
    font-weight: 500;
    border-radius: 4px;
    margin: 0;
  }
  a,
  a:hover {
    text-decoration: none;
    color: inherit;
  }
  a:focus {
    color: inherit;
  }
  a {
    display: flex;
    align-items: center;
    flex: 1;
  }
  a > span > svg,
  span > svg {
    display: block;
  }
  .sidebar-heading-icon {
    color: inherit;
  }
  & > * {
    transition: none;
  }
`;