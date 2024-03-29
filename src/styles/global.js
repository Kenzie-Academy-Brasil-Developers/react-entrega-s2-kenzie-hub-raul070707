import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
    }

    :root {
        --color-primary: #ff577f;
        --color-primary-focus: #ff427f;
        --color-primary-negative: #59323f;
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343b41;
        --grey-1: #868e96;
        --grey-0: #f8f9fa;
        --sucess: #3fe864;
        --negative: #e83f5b;
    }

    body {
        background-color: var(--grey-4);
        color: var(--grey-0);
        font-family: 'Inter';
        font-size: 1rem;
    }

    button {
        color: var(--grey-0);
        cursor: pointer;
    }
`