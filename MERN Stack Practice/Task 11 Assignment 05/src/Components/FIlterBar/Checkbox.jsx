import styled from "styled-components";

const Checkbox = ({ subtitle, isChecked, onChange }) => {
  const id = `cbx-${subtitle}`;

  return (
    <StyledWrapper>
      <label className="flex items-center gap-2 cursor-pointer select-none">
        <input
          type="checkbox"
          className="ui-checkbox"
          checked={isChecked}
          onChange={onChange}
        />
        <span>{subtitle}</span>
      </label>
    </StyledWrapper>
  );
};

export default Checkbox;
const StyledWrapper = styled.div`
  /* checkbox settings 👇 */

  .ui-checkbox {
    --primary-color: #506eee;
    --secondary-color: #fff;
    --primary-hover-color: #506eee;
    /* checkbox */
    --checkbox-diameter: 20px;
    --checkbox-border-radius: 5px;
    --checkbox-border-color: #d9d9d9;
    --checkbox-border-width: 1px;
    --checkbox-border-style: solid;
    /* checkmark */
    --checkmark-size: 1;
  }

  .ui-checkbox,
  .ui-checkbox *,
  .ui-checkbox *::before,
  .ui-checkbox *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .ui-checkbox {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: var(--checkbox-diameter);
    height: var(--checkbox-diameter);
    border-radius: var(--checkbox-border-radius);
    background: var(--secondary-color);
    border: var(--checkbox-border-width) var(--checkbox-border-style)
      var(--checkbox-border-color);
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
    position: relative;
  }

  .ui-checkbox::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5)
      var(--primary-color);
    box-shadow: 0 0 0 calc(var(--checkbox-diameter) / 2.5) var(--primary-color);
    border-radius: inherit;
    opacity: 0;
    -webkit-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
    -o-transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
    transition: all 0.5s cubic-bezier(0.12, 0.4, 0.29, 1.46);
  }

  .ui-checkbox::before {
    top: 40%;
    left: 50%;
    content: "";
    position: absolute;
    width: 4px;
    height: 7px;
    border-right: 2px solid var(--secondary-color);
    border-bottom: 2px solid var(--secondary-color);
    -webkit-transform: translate(-50%, -50%) rotate(45deg) scale(0);
    -ms-transform: translate(-50%, -50%) rotate(45deg) scale(0);
    transform: translate(-50%, -50%) rotate(45deg) scale(0);
    opacity: 0;
    -webkit-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6),
      opacity 0.1s;
    -o-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
    transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
  }

  /* actions */

  .ui-checkbox:hover {
    border-color: var(--primary-color);
  }

  .ui-checkbox:checked {
    background: var(--primary-color);
    border-color: transparent;
  }

  .ui-checkbox:checked::before {
    opacity: 1;
    -webkit-transform: translate(-50%, -50%) rotate(45deg)
      scale(var(--checkmark-size));
    -ms-transform: translate(-50%, -50%) rotate(45deg)
      scale(var(--checkmark-size));
    transform: translate(-50%, -50%) rotate(45deg) scale(var(--checkmark-size));
    -webkit-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    -o-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
  }

  .ui-checkbox:active:not(:checked)::after {
    -webkit-transition: none;
    -o-transition: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    transition: none;
    opacity: 1;
  }
`;

// const StyledWrapper = styled.div`
//   .checkbox-wrapper-46 input[type="checkbox"] {
//     display: none;
//     visibility: hidden;
//   }

//   .checkbox-wrapper-46 .cbx {
//     margin: auto;
//     -webkit-user-select: none;
//     user-select: none;
//     cursor: pointer;
//   }
//   .checkbox-wrapper-46 .cbx span {
//     display: inline-block;
//     vertical-align: middle;
//     transform: translate3d(0, 0, 0);
//   }
//   .checkbox-wrapper-46 .cbx span:first-child {
//     position: relative;
//     width: 18px;
//     height: 18px;
//     border-radius: 3px;
//     transform: scale(1);
//     vertical-align: middle;
//     border: 1px solid #9098a9;
//     transition: all 0.2s ease;
//   }
//   .checkbox-wrapper-46 .cbx span:first-child svg {
//     position: absolute;
//     top: 3px;
//     left: 2px;
//     fill: none;
//     stroke: #ffffff;
//     stroke-width: 2;
//     stroke-linecap: round;
//     stroke-linejoin: round;
//     stroke-dasharray: 16px;
//     stroke-dashoffset: 16px;
//     transition: all 0.3s ease;
//     transition-delay: 0.1s;
//     transform: translate3d(0, 0, 0);
//   }
//   .checkbox-wrapper-46 .cbx span:first-child:before {
//     content: "";
//     width: 100%;
//     height: 100%;
//     background: #506eec;
//     display: block;
//     transform: scale(0);
//     opacity: 1;
//     border-radius: 50%;
//   }
//   .checkbox-wrapper-46 .cbx span:last-child {
//     padding-left: 8px;
//   }
//   .checkbox-wrapper-46 .cbx:hover span:first-child {
//     border-color: #506eec;
//   }

//   .checkbox-wrapper-46 .inp-cbx:checked + .cbx span:first-child {
//     background: #506eec;
//     border-color: #506eec;
//     animation: wave-46 0.4s ease;
//   }
//   .checkbox-wrapper-46 .inp-cbx:checked + .cbx span:first-child svg {
//     stroke-dashoffset: 0;
//   }
//   .checkbox-wrapper-46 .inp-cbx:checked + .cbx span:first-child:before {
//     transform: scale(3.5);
//     opacity: 0;
//     transition: all 0.6s ease;
//   }

//   @keyframes wave-46 {
//     50% {
//       transform: scale(0.9);
//     }
//   }`;
