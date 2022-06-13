 /* eslint-disable */
import React from 'react'
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";


function SidebarSection({
  icon,
  title,
  linkTo,
  onClick
}) {
  return (
    <Section onClick={onClick}>
      <NavLink to={linkTo} > 
          <span>
            {icon}
          </span>
          <span style={{marginLeft: '10px'}}>
            {title}
          </span>
      </NavLink>
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
  margin: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
  font-size: 0.85em;
  transition: none;
  cursor: pointer;
  &:hover {
    border: 2px solid black;
    border-radius: 10px;


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