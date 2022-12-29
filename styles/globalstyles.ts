import { createGlobalStyle } from "styled-components";
import { Source_Sans_Pro } from "@next/font/google";

const inter = Source_Sans_Pro({ weight: "600", subsets: ["latin"] });

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${inter.style.fontFamily};
    tab-size: 4;
    font-size: 18px;
    max-width:1440px;
 margin: 0 auto;
  }
  body {
    color: ${({ theme }) => theme.colors.text};

  scroll-behavior: smooth;
  font-family: ${inter.style.fontFamily};
  background-color: ${({ theme }) => theme.colors.background.primary}; 
  background-image: url("/bubbles.svg");
  background-size: contain;
  background-repeat:repeat;
  background-origin: border-box;
  background-attachment: local;
animation: bgScroll 80s linear infinite;
 

  }
  a {

    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
 
 
 // animations
 @keyframes wobble {
  0% { transform: translateX(0%); }
  15% { transform: translateX(-25%) rotate(-5deg); }
  30% { transform: translateX(20%) rotate(3deg); }
  45% { transform: translateX(-15%) rotate(-3deg); }
  60% { transform: translateX(10%) rotate(2deg); }
  75% { transform: translateX(-5%) rotate(-1deg); }
  100% { transform: translateX(0%); }
}
 @keyframes bgScroll {
  0% {
 
    background-position : 0px 0px
  }
  100% {
 
    background-position : 0px -808px
  }
}

  @keyframes leafanimation {
    0% {
		transform: translate(-7.54px, -17.78px) skewX(0deg) scale(1) ;
	}
	 
  50% {
 transform:  translate(-7.54px, -17.78px) skewX(-6deg) scale(1)  ;
  }
	100% {
		transform: translate(-7.54px, -17.78px) skewX(0deg) scale(1)  ;
	}
}

  @keyframes animateBubble {
    0% {
        margin-top: 1000px;
    }
    100% {
        margin-top: -100%;
    }
}

  @-webkit-keyframes animateBubble {
    0% {
        margin-top: 1000px;
    }
    100% {
        margin-top: -100%;
    }
}

@-moz-keyframes animateBubble {
    0% {
        margin-top: 1000px;
    }
    100% {
        margin-top: -100%;
    }
}

@keyframes animateBubble {
    0% {
        margin-top: 1000px;
    }
    100% {
        margin-top: -100%;
    }
}

@-webkit-keyframes sideWays { 
    0% { 
        margin-left:0px;
    }
    100% { 
        margin-left:50px;
    }
}

@-moz-keyframes sideWays { 
    0% { 
        margin-left:0px;
    }
    100% { 
        margin-left:50px;
    }
}

@keyframes sideWays { 
    0% { 
        margin-left:0px;
    }
    100% { 
        margin-left:50px;
    }
}


@keyframes floatingIcon {
	0% {

		transform: translatey(0px)  ;
	}
	50% {

		transform: translatey(-5px)  ;
	}
	100% {

		transform: translatey(0px)   ;
	}
} 


@keyframes float1 {
	0% {
    opacity: 1;
		box-shadow: 0 15px 15px 0px rgba(0,0,0,0.3);
		transform: translatey(0px) rotate(8deg) skew(3deg);
	}
	50% {
    opacity: 1;
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-4px) rotate(8deg) skew(3deg);
	}
	100% {
    opacity: 1;
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px) rotate(8deg) skew(3deg);
	}
}


@keyframes float2 {
	0% {
    opacity: 1;
		box-shadow: 0 15px 15px 0px rgba(0,0,0,0.3);
		transform: translatey(0px) rotate(-8deg) skew(3deg);
	}
	50% {
    opacity: 1;
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-4px) rotate(-8deg) skew(3deg);
	}
	100% {
    opacity: 1;
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px) rotate(-8deg) skew(3deg);
	}
}

@keyframes float3 {
	0% {
    opacity: 1;
		box-shadow: 0 15px 15px 0px rgba(0,0,0,0.3);
		transform: translatey(0px) rotate(-2deg) skew(3deg);
	}
	50% {
    opacity: 1;
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-8px) rotate(-2deg) skew(3deg);
	}
	100% {
    opacity: 1;
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px) rotate(-2deg) skew(3deg);
	}
}

  @keyframes rotation {
    0% {
      -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    

        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
      }

  @keyframes pop-in {
    0% {
      opacity: 0;
      transform: translateY(-10rem) scale(0.8);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
`;

export default GlobalStyle;
