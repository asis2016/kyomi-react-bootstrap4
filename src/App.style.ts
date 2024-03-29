import styled from 'styled-components'
import { DefaultStyle } from './assets/style'

export const AppBase = styled.div`
	overflow: hidden;

	body {
		background-color: ${DefaultStyle.bgColor};
		font-family: ${DefaultStyle.secondaryFont};
        color: #121212;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: ${DefaultStyle.primaryFont};
		color: ${DefaultStyle.primary};
	}

	p,
	li,
	a,
	ul,
	.btn {
		font-family: ${DefaultStyle.secondaryFont};
		font-size: 1rem;
	}
  
      a, .btn {
        color: ${DefaultStyle.secondary};
      }

	.sub-title {
		font-family: ${DefaultStyle.subTitleFont};
		font-size: 1.5rem;
		color: ${DefaultStyle.tertiary};
	}

	/* Background */

	.bg-primary-lynne {
		background: ${DefaultStyle.primary};
	}

	.bg-secondary-lynne {
		background: ${DefaultStyle.secondary};
	}

	/* Buttons */

	.btn-primary-${DefaultStyle.themeName} {
		background: ${DefaultStyle.primary};
		color: #fff;
	}

	.btn-primary-outline-${DefaultStyle.themeName} {
		background: none;
		border-color: ${DefaultStyle.primary};
		color: ${DefaultStyle.primary};
	}

	.btn-secondary-${DefaultStyle.themeName} {
		background: ${DefaultStyle.secondary};
		border-color: ${DefaultStyle.secondary};
		color: #fff;
	}

	.btn-secondary-outline-${DefaultStyle.themeName} {
		border-color: ${DefaultStyle.secondary};
		color: ${DefaultStyle.secondary};
	}

	/* Badges */

	.badge-primary-${DefaultStyle.themeName} {
		background: ${DefaultStyle.primary};
		color: #fff;
	}

	.badge-secondary-${DefaultStyle.themeName} {
		background: ${DefaultStyle.secondary};
		color: #fff;
	}
  
  /* Card */
  .card{
    .card-text{
      color: #121212;
    }
  }
`
