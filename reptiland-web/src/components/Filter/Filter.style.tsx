import styled from "styled-components";

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    background: #eeeeee;
    padding: 8px;
    border-radius: 4px;
    width: 100%;
    border: 1px solid #747474;

    .icon{
        color: #1f1f1f;
        width: 20px;
        height: 20px
    }
    input {
        background: none;
        border: none;
        font-family: Poppins;
        width: 100%;

        :focus{
            border: none;
            outline: none;
        }
    }



`;
