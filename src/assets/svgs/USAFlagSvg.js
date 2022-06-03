import React from 'react';
import styled from 'styled-components';
import { SERVER_LOCATION } from '../../constants/ServerLocation';

export const USAFlagSVG = ({
  isActive = false,
  handleChangeServer,
}) => (
  <USAFlag
    isActive={isActive}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    onClick={() => handleChangeServer(SERVER_LOCATION.USA)}
  >
    <path
      d="M29.6034 5.51725H2.39656C1.07294 5.51725 0 6.59019 0 7.91381V24.0863C0 25.4098 1.07294 26.4828 2.39656 26.4828H29.6034C30.927 26.4828 32 25.4099 32 24.0863V7.91381C32 6.59019 30.9271 5.51725 29.6034 5.51725Z"
      fill="#F5F5F5"
    />
    <path
      d="M0.131805 7.13H31.8681C31.5434 6.19144 30.6524 5.51725 29.6034 5.51725H2.39655C1.34756 5.51725 0.456618 6.19144 0.131805 7.13Z"
      fill="#FF4B55"
    />
    <path d="M32 11.9681H0V13.5808H32V11.9681Z" fill="#FF4B55" />
    <path d="M32 8.7425H0V10.3552H32V8.7425Z" fill="#FF4B55" />
    <path
      d="M0 16.2546C0 16.5593 0.247063 16.8064 0.55175 16.8064H32V15.1936H0V16.2546Z"
      fill="#FF4B55"
    />
    <path d="M32 21.645H0V23.2577H32V21.645Z" fill="#FF4B55" />
    <path
      d="M31.8682 24.87H0.131805C0.456618 25.8086 1.34762 26.4828 2.39655 26.4828H29.6034C30.6524 26.4828 31.5434 25.8086 31.8682 24.87Z"
      fill="#FF4B55"
    />
    <path d="M32 18.4194H0V20.0321H32V18.4194Z" fill="#FF4B55" />
    <path
      d="M0.55175 16.8064H14.3449C14.6496 16.8064 14.8966 16.5593 14.8966 16.2546V6.06894C14.8966 5.76419 14.6496 5.51719 14.3449 5.51719H2.39656C1.07294 5.51725 0 6.59019 0 7.91381V16.2546C0 16.5594 0.247063 16.8064 0.55175 16.8064Z"
      fill="#41479B"
    />
    <path
      d="M1.5493 6.78368L1.67142 7.14993L2.05749 7.15287C2.10749 7.15331 2.12817 7.21706 2.08799 7.24675L1.77742 7.47606L1.89392 7.84412C1.90905 7.89175 1.85474 7.93125 1.81405 7.90212L1.49999 7.67768L1.18592 7.90218C1.14524 7.93131 1.09105 7.89181 1.10605 7.84418L1.22255 7.47612L0.911987 7.24681C0.8718 7.21706 0.892488 7.15331 0.942487 7.15293L1.32855 7.15L1.45067 6.78375C1.46642 6.73625 1.53342 6.73625 1.5493 6.78368Z"
      fill="#F5F5F5"
    />
    <path
      d="M1.5493 8.69944L1.67142 9.06569L2.05749 9.06863C2.10749 9.06907 2.12817 9.13275 2.08799 9.1625L1.77742 9.39188L1.89392 9.75994C1.90905 9.80757 1.85474 9.84707 1.81405 9.81794L1.49999 9.59351L1.18592 9.81801C1.14524 9.84707 1.09105 9.80763 1.10605 9.76001L1.22255 9.39194L0.911987 9.16257C0.8718 9.13282 0.892488 9.06913 0.942487 9.06869L1.32855 9.06575L1.45067 8.6995C1.46642 8.65206 1.53342 8.65206 1.5493 8.69944Z"
      fill="#F5F5F5"
    />
    <path
      d="M1.5493 10.6154L1.67142 10.9816L2.05749 10.9846C2.10749 10.985 2.12817 11.0487 2.08799 11.0784L1.77742 11.3078L1.89392 11.6759C1.90905 11.7235 1.85474 11.763 1.81405 11.7339L1.49999 11.5094L1.18592 11.7339C1.14524 11.763 1.09105 11.7236 1.10605 11.6759L1.22255 11.3079L0.911987 11.0785C0.8718 11.0487 0.892488 10.9851 0.942487 10.9846L1.32855 10.9817L1.45067 10.6154C1.46642 10.5679 1.53342 10.5679 1.5493 10.6154Z"
      fill="#F5F5F5"
    />
    <path
      d="M1.5493 12.5312L1.67142 12.8975L2.05749 12.9004C2.10749 12.9009 2.12817 12.9646 2.08799 12.9943L1.77742 13.2237L1.89392 13.5917C1.90905 13.6394 1.85474 13.6789 1.81405 13.6497L1.49999 13.4253L1.18592 13.6498C1.14524 13.6789 1.09105 13.6394 1.10605 13.5918L1.22255 13.2237L0.911987 12.9944C0.8718 12.9647 0.892488 12.9009 0.942487 12.9005L1.32855 12.8976L1.45067 12.5313C1.46642 12.4838 1.53342 12.4838 1.5493 12.5312Z"
      fill="#F5F5F5"
    />
    <path
      d="M1.5493 14.4471L1.67142 14.8134L2.05749 14.8163C2.10749 14.8168 2.12817 14.8804 2.08799 14.9102L1.77742 15.1396L1.89392 15.5076C1.90905 15.5552 1.85474 15.5948 1.81405 15.5656L1.49999 15.3412L1.18592 15.5657C1.14524 15.5947 1.09105 15.5553 1.10605 15.5077L1.22255 15.1396L0.911987 14.9102C0.8718 14.8805 0.892488 14.8168 0.942487 14.8164L1.32855 14.8134L1.45067 14.4472C1.46642 14.3998 1.53342 14.3998 1.5493 14.4471Z"
      fill="#F5F5F5"
    />
    <path
      d="M3.03636 7.72287L3.15848 8.08912L3.54455 8.09206C3.59455 8.0925 3.61523 8.15625 3.57505 8.18594L3.26448 8.41531L3.38098 8.78337C3.39611 8.831 3.3418 8.8705 3.30111 8.84137L2.98705 8.61687L2.67299 8.84137C2.6323 8.87044 2.57811 8.831 2.59311 8.78337L2.70961 8.41531L2.39905 8.18594C2.35886 8.15619 2.37955 8.0925 2.42955 8.09206L2.81561 8.08912L2.93773 7.72287C2.95348 7.6755 3.02055 7.6755 3.03636 7.72287Z"
      fill="#F5F5F5"
    />
    <path
      d="M3.03636 9.63881L3.15848 10.0051L3.54455 10.008C3.59455 10.0084 3.61523 10.0722 3.57505 10.1019L3.26448 10.3312L3.38098 10.6993C3.39611 10.7469 3.3418 10.7864 3.30111 10.7573L2.98705 10.5328L2.67299 10.7573C2.6323 10.7864 2.57811 10.747 2.59311 10.6993L2.70961 10.3312L2.39905 10.1019C2.35886 10.0722 2.37955 10.0084 2.42955 10.008L2.81561 10.0051L2.93773 9.63881C2.95348 9.59137 3.02055 9.59137 3.03636 9.63881Z"
      fill="#F5F5F5"
    />
    <path
      d="M3.03636 11.5547L3.15848 11.9209L3.54455 11.9239C3.59455 11.9243 3.61523 11.988 3.57505 12.0178L3.26448 12.2471L3.38098 12.6152C3.39611 12.6628 3.3418 12.7023 3.30111 12.6732L2.98705 12.4487L2.67299 12.6732C2.6323 12.7023 2.57811 12.6628 2.59311 12.6152L2.70961 12.2471L2.39905 12.0178C2.35886 11.988 2.37955 11.9243 2.42955 11.9239L2.81561 11.9209L2.93773 11.5547C2.95348 11.5073 3.02055 11.5073 3.03636 11.5547Z"
      fill="#F5F5F5"
    />
    <path
      d="M3.03636 13.4706L3.15848 13.8368L3.54455 13.8397C3.59455 13.8402 3.61523 13.9039 3.57505 13.9336L3.26448 14.163L3.38098 14.5311C3.39611 14.5787 3.3418 14.6182 3.30111 14.5891L2.98705 14.3646L2.67299 14.5891C2.6323 14.6182 2.57811 14.5787 2.59311 14.5311L2.70961 14.163L2.39905 13.9336C2.35886 13.9039 2.37955 13.8402 2.42955 13.8397L2.81561 13.8368L2.93773 13.4706C2.95348 13.4232 3.02055 13.4232 3.03636 13.4706Z"
      fill="#F5F5F5"
    />
    <path
      d="M4.52342 6.78356L4.64555 7.14981L5.03161 7.15275C5.08161 7.15319 5.10229 7.21694 5.06211 7.24663L4.75154 7.47594L4.86804 7.844C4.88317 7.89163 4.82886 7.93113 4.78817 7.902L4.47411 7.6775L4.16005 7.902C4.11936 7.93113 4.06517 7.89163 4.08017 7.844L4.19667 7.47594L3.88611 7.24663C3.84592 7.21688 3.86661 7.15313 3.91661 7.15275L4.30267 7.14981L4.4248 6.78356C4.44055 6.73612 4.50761 6.73612 4.52342 6.78356Z"
      fill="#F5F5F5"
    />
    <path
      d="M4.52342 8.69944L4.64555 9.06569L5.03161 9.06863C5.08161 9.06906 5.10229 9.13275 5.06211 9.1625L4.75154 9.39187L4.86804 9.75994C4.88317 9.80756 4.82886 9.84706 4.78817 9.81794L4.47411 9.59344L4.16005 9.81794C4.11936 9.847 4.06517 9.80756 4.08017 9.75994L4.19667 9.39187L3.88611 9.1625C3.84592 9.13275 3.86661 9.06906 3.91661 9.06863L4.30267 9.06569L4.4248 8.69944C4.44055 8.65206 4.50761 8.65206 4.52342 8.69944Z"
      fill="#F5F5F5"
    />
    <path
      d="M4.52342 10.6154L4.64555 10.9816L5.03161 10.9846C5.08161 10.985 5.10229 11.0487 5.06211 11.0784L4.75154 11.3078L4.86804 11.6759C4.88317 11.7235 4.82886 11.763 4.78817 11.7339L4.47411 11.5094L4.16005 11.7339C4.11936 11.7629 4.06517 11.7236 4.08017 11.6759L4.19667 11.3078L3.88611 11.0784C3.84592 11.0487 3.86661 10.985 3.91661 10.9846L4.30267 10.9816L4.4248 10.6154C4.44055 10.5679 4.50761 10.5679 4.52342 10.6154Z"
      fill="#F5F5F5"
    />
    <path
      d="M4.52342 12.5313L4.64555 12.8975L5.03161 12.9004C5.08161 12.9009 5.10229 12.9646 5.06211 12.9943L4.75154 13.2237L4.86804 13.5918C4.88317 13.6394 4.82886 13.6789 4.78817 13.6498L4.47411 13.4253L4.16005 13.6498C4.11936 13.6788 4.06517 13.6394 4.08017 13.5918L4.19667 13.2237L3.88611 12.9943C3.84592 12.9647 3.86661 12.9009 3.91661 12.9004L4.30267 12.8975L4.4248 12.5313C4.44055 12.4838 4.50761 12.4838 4.52342 12.5313Z"
      fill="#F5F5F5"
    />
    <path
      d="M4.52342 14.4471L4.64555 14.8134L5.03161 14.8163C5.08161 14.8167 5.10229 14.8804 5.06211 14.9102L4.75154 15.1396L4.86804 15.5076C4.88317 15.5552 4.82886 15.5947 4.78817 15.5656L4.47411 15.3411L4.16005 15.5656C4.11936 15.5947 4.06517 15.5552 4.08017 15.5076L4.19667 15.1396L3.88611 14.9102C3.84592 14.8804 3.86661 14.8167 3.91661 14.8163L4.30267 14.8134L4.4248 14.4471C4.44055 14.3998 4.50761 14.3998 4.52342 14.4471Z"
      fill="#F5F5F5"
    />
    <path
      d="M6.01054 7.72287L6.13267 8.08912L6.51873 8.09206C6.56873 8.0925 6.58942 8.15625 6.54923 8.18594L6.23867 8.41531L6.35517 8.78337C6.37029 8.831 6.31598 8.8705 6.27529 8.84137L5.96123 8.61687L5.64717 8.84137C5.60648 8.87044 5.55229 8.831 5.56729 8.78337L5.68379 8.41531L5.37323 8.18594C5.33304 8.15619 5.35373 8.0925 5.40373 8.09206L5.78979 8.08912L5.91192 7.72287C5.92761 7.6755 5.99473 7.6755 6.01054 7.72287Z"
      fill="#F5F5F5"
    />
    <path
      d="M6.01054 9.63881L6.13267 10.0051L6.51873 10.008C6.56873 10.0084 6.58942 10.0722 6.54923 10.1019L6.23867 10.3312L6.35517 10.6993C6.37029 10.7469 6.31598 10.7864 6.27529 10.7573L5.96123 10.5328L5.64717 10.7573C5.60648 10.7864 5.55229 10.747 5.56729 10.6993L5.68379 10.3312L5.37323 10.1019C5.33304 10.0722 5.35373 10.0084 5.40373 10.008L5.78979 10.0051L5.91192 9.63881C5.92761 9.59137 5.99473 9.59137 6.01054 9.63881Z"
      fill="#F5F5F5"
    />
    <path
      d="M6.01054 11.5547L6.13267 11.9209L6.51873 11.9239C6.56873 11.9243 6.58942 11.988 6.54923 12.0178L6.23867 12.2471L6.35517 12.6152C6.37029 12.6628 6.31598 12.7023 6.27529 12.6732L5.96123 12.4487L5.64717 12.6732C5.60648 12.7023 5.55229 12.6628 5.56729 12.6152L5.68379 12.2471L5.37323 12.0178C5.33304 11.988 5.35373 11.9243 5.40373 11.9239L5.78979 11.9209L5.91192 11.5547C5.92761 11.5073 5.99473 11.5073 6.01054 11.5547Z"
      fill="#F5F5F5"
    />
    <path
      d="M6.01054 13.4706L6.13267 13.8368L6.51873 13.8397C6.56873 13.8402 6.58942 13.9039 6.54923 13.9336L6.23867 14.163L6.35517 14.5311C6.37029 14.5787 6.31598 14.6182 6.27529 14.5891L5.96123 14.3646L5.64717 14.5891C5.60648 14.6182 5.55229 14.5787 5.56729 14.5311L5.68379 14.163L5.37323 13.9336C5.33304 13.9039 5.35373 13.8402 5.40373 13.8397L5.78979 13.8368L5.91192 13.4706C5.92761 13.4232 5.99473 13.4232 6.01054 13.4706Z"
      fill="#F5F5F5"
    />
    <path
      d="M7.49761 6.78356L7.61973 7.14981L8.00579 7.15275C8.05579 7.15319 8.07648 7.21694 8.03629 7.24662L7.72573 7.47594L7.84223 7.844C7.85736 7.89162 7.80304 7.93112 7.76236 7.902L7.44823 7.67756L7.13417 7.90206C7.09348 7.93119 7.03929 7.89169 7.05429 7.84406L7.17079 7.476L6.86023 7.24669C6.82004 7.21694 6.84073 7.15319 6.89073 7.15281L7.27679 7.14987L7.39892 6.78362C7.41473 6.73612 7.48179 6.73612 7.49761 6.78356Z"
      fill="#F5F5F5"
    />
    <path
      d="M7.49761 8.69944L7.61973 9.06569L8.00579 9.06863C8.05579 9.06906 8.07648 9.13275 8.03629 9.1625L7.72573 9.39187L7.84223 9.75994C7.85736 9.80756 7.80304 9.84706 7.76236 9.81794L7.44823 9.59344L7.13417 9.81794C7.09348 9.847 7.03929 9.80756 7.05429 9.75994L7.17079 9.39187L6.86023 9.1625C6.82004 9.13275 6.84073 9.06906 6.89073 9.06863L7.27679 9.06569L7.39892 8.69944C7.41473 8.65206 7.48179 8.65206 7.49761 8.69944Z"
      fill="#F5F5F5"
    />
    <path
      d="M7.49761 10.6154L7.61973 10.9816L8.00579 10.9846C8.05579 10.985 8.07648 11.0487 8.03629 11.0784L7.72573 11.3078L7.84223 11.6759C7.85736 11.7235 7.80304 11.763 7.76236 11.7339L7.44823 11.5093L7.13417 11.7338C7.09348 11.7629 7.03929 11.7234 7.05429 11.6758L7.17079 11.3077L6.86023 11.0784C6.82004 11.0486 6.84073 10.9849 6.89073 10.9845L7.27679 10.9816L7.39892 10.6153C7.41473 10.5679 7.48179 10.5679 7.49761 10.6154Z"
      fill="#F5F5F5"
    />
    <path
      d="M7.49761 12.5313L7.61973 12.8975L8.00579 12.9004C8.05579 12.9009 8.07648 12.9646 8.03629 12.9943L7.72573 13.2237L7.84223 13.5918C7.85736 13.6394 7.80304 13.6789 7.76236 13.6498L7.44823 13.4253L7.13417 13.6498C7.09348 13.6788 7.03929 13.6394 7.05429 13.5918L7.17079 13.2237L6.86023 12.9943C6.82004 12.9647 6.84073 12.9009 6.89073 12.9004L7.27679 12.8975L7.39892 12.5313C7.41473 12.4838 7.48179 12.4838 7.49761 12.5313Z"
      fill="#F5F5F5"
    />
    <path
      d="M7.49761 14.4471L7.61973 14.8134L8.00579 14.8163C8.05579 14.8167 8.07648 14.8804 8.03629 14.9102L7.72573 15.1396L7.84223 15.5076C7.85736 15.5552 7.80304 15.5947 7.76236 15.5656L7.44823 15.3411L7.13417 15.5656C7.09348 15.5947 7.03929 15.5552 7.05429 15.5076L7.17079 15.1396L6.86023 14.9102C6.82004 14.8804 6.84073 14.8167 6.89073 14.8163L7.27679 14.8134L7.39892 14.4471C7.41473 14.3998 7.48179 14.3998 7.49761 14.4471Z"
      fill="#F5F5F5"
    />
    <path
      d="M8.98467 7.72287L9.10679 8.08912L9.49286 8.09206C9.54286 8.0925 9.56355 8.15625 9.52336 8.18594L9.21279 8.41531L9.32929 8.78337C9.34442 8.831 9.29011 8.8705 9.24942 8.84137L8.93536 8.61687L8.62129 8.84137C8.5806 8.87044 8.52641 8.831 8.54141 8.78337L8.65792 8.41531L8.34735 8.18594C8.30716 8.15619 8.32785 8.0925 8.37785 8.09206L8.76392 8.08912L8.88604 7.72287C8.90185 7.6755 8.96886 7.6755 8.98467 7.72287Z"
      fill="#F5F5F5"
    />
    <path
      d="M8.98467 9.63881L9.10679 10.0051L9.49286 10.008C9.54286 10.0084 9.56355 10.0722 9.52336 10.1019L9.21279 10.3312L9.32929 10.6993C9.34442 10.7469 9.29011 10.7864 9.24942 10.7573L8.93536 10.5328L8.62129 10.7573C8.5806 10.7864 8.52641 10.747 8.54141 10.6993L8.65792 10.3312L8.34735 10.1019C8.30716 10.0722 8.32785 10.0084 8.37785 10.008L8.76392 10.0051L8.88604 9.63881C8.90185 9.59137 8.96886 9.59137 8.98467 9.63881Z"
      fill="#F5F5F5"
    />
    <path
      d="M8.98467 11.5547L9.10679 11.9209L9.49286 11.9239C9.54286 11.9243 9.56355 11.988 9.52336 12.0178L9.21279 12.2471L9.32929 12.6152C9.34442 12.6628 9.29011 12.7023 9.24942 12.6732L8.93536 12.4487L8.62129 12.6732C8.5806 12.7023 8.52641 12.6628 8.54141 12.6152L8.65792 12.2471L8.34735 12.0178C8.30716 11.988 8.32785 11.9243 8.37785 11.9239L8.76392 11.9209L8.88604 11.5547C8.90185 11.5073 8.96886 11.5073 8.98467 11.5547Z"
      fill="#F5F5F5"
    />
    <path
      d="M8.98467 13.4706L9.10679 13.8368L9.49286 13.8397C9.54286 13.8402 9.56355 13.9039 9.52336 13.9336L9.21279 14.163L9.32929 14.5311C9.34442 14.5787 9.29011 14.6182 9.24942 14.5891L8.93536 14.3646L8.62129 14.5891C8.5806 14.6182 8.52641 14.5787 8.54141 14.5311L8.65792 14.163L8.34735 13.9336C8.30716 13.9039 8.32785 13.8402 8.37785 13.8397L8.76392 13.8368L8.88604 13.4706C8.90185 13.4232 8.96886 13.4232 8.98467 13.4706Z"
      fill="#F5F5F5"
    />
    <path
      d="M10.4718 6.78356L10.5939 7.14981L10.98 7.15275C11.03 7.15319 11.0507 7.21694 11.0105 7.24663L10.6999 7.47594L10.8164 7.844C10.8316 7.89163 10.7773 7.93113 10.7366 7.902L10.4225 7.6775L10.1084 7.902C10.0678 7.93113 10.0136 7.89163 10.0286 7.844L10.1451 7.47594L9.8345 7.24663C9.79432 7.21688 9.815 7.15313 9.865 7.15275L10.2511 7.14981L10.3732 6.78356C10.3889 6.73612 10.456 6.73612 10.4718 6.78356Z"
      fill="#F5F5F5"
    />
    <path
      d="M10.4718 8.69944L10.5939 9.06569L10.98 9.06863C11.03 9.06906 11.0507 9.13275 11.0105 9.1625L10.6999 9.39187L10.8164 9.75994C10.8316 9.80756 10.7773 9.84706 10.7366 9.81794L10.4225 9.59344L10.1084 9.81794C10.0678 9.847 10.0136 9.80756 10.0286 9.75994L10.1451 9.39187L9.8345 9.1625C9.79432 9.13275 9.815 9.06906 9.865 9.06863L10.2511 9.06569L10.3732 8.69944C10.3889 8.65206 10.456 8.65206 10.4718 8.69944Z"
      fill="#F5F5F5"
    />
    <path
      d="M10.4718 10.6154L10.5939 10.9816L10.98 10.9846C11.03 10.985 11.0507 11.0487 11.0105 11.0784L10.6999 11.3078L10.8164 11.6759C10.8316 11.7235 10.7773 11.763 10.7366 11.7339L10.4225 11.5094L10.1084 11.7339C10.0678 11.7629 10.0136 11.7236 10.0286 11.6759L10.1451 11.3078L9.8345 11.0784C9.79432 11.0487 9.815 10.985 9.865 10.9846L10.2511 10.9816L10.3732 10.6154C10.3889 10.5679 10.456 10.5679 10.4718 10.6154Z"
      fill="#F5F5F5"
    />
    <path
      d="M10.4718 12.5313L10.5939 12.8975L10.98 12.9004C11.03 12.9009 11.0507 12.9646 11.0105 12.9943L10.6999 13.2237L10.8164 13.5918C10.8316 13.6394 10.7773 13.6789 10.7366 13.6498L10.4225 13.4253L10.1084 13.6498C10.0678 13.6788 10.0136 13.6394 10.0286 13.5918L10.1451 13.2237L9.8345 12.9943C9.79432 12.9647 9.815 12.9009 9.865 12.9004L10.2511 12.8975L10.3732 12.5313C10.3889 12.4838 10.456 12.4838 10.4718 12.5313Z"
      fill="#F5F5F5"
    />
    <path
      d="M10.4718 14.4471L10.5939 14.8134L10.98 14.8163C11.03 14.8167 11.0507 14.8804 11.0105 14.9102L10.6999 15.1396L10.8164 15.5076C10.8316 15.5552 10.7773 15.5947 10.7366 15.5656L10.4225 15.3411L10.1084 15.5656C10.0678 15.5947 10.0136 15.5552 10.0286 15.5076L10.1451 15.1396L9.8345 14.9102C9.79432 14.8804 9.815 14.8167 9.865 14.8163L10.2511 14.8134L10.3732 14.4471C10.3889 14.3998 10.456 14.3998 10.4718 14.4471Z"
      fill="#F5F5F5"
    />
    <path
      d="M11.9589 7.72287L12.081 8.08912L12.4671 8.09206C12.5171 8.0925 12.5377 8.15625 12.4976 8.18594L12.187 8.41531L12.3035 8.78337C12.3186 8.831 12.2643 8.8705 12.2236 8.84137L11.9096 8.61687L11.5955 8.84137C11.5548 8.87044 11.5006 8.831 11.5156 8.78337L11.6321 8.41531L11.3216 8.18594C11.2814 8.15619 11.3021 8.0925 11.3521 8.09206L11.7381 8.08912L11.8603 7.72287C11.876 7.6755 11.9431 7.6755 11.9589 7.72287Z"
      fill="#F5F5F5"
    />
    <path
      d="M11.9589 9.63881L12.081 10.0051L12.4671 10.008C12.5171 10.0084 12.5377 10.0722 12.4976 10.1019L12.187 10.3312L12.3035 10.6993C12.3186 10.7469 12.2643 10.7864 12.2236 10.7573L11.9096 10.5328L11.5955 10.7573C11.5548 10.7864 11.5006 10.747 11.5156 10.6993L11.6321 10.3312L11.3216 10.1019C11.2814 10.0722 11.3021 10.0084 11.3521 10.008L11.7381 10.0051L11.8603 9.63881C11.876 9.59137 11.9431 9.59137 11.9589 9.63881Z"
      fill="#F5F5F5"
    />
    <path
      d="M11.9589 11.5547L12.081 11.9209L12.4671 11.9239C12.5171 11.9243 12.5377 11.988 12.4976 12.0178L12.187 12.2471L12.3035 12.6152C12.3186 12.6628 12.2643 12.7023 12.2236 12.6732L11.9096 12.4487L11.5955 12.6732C11.5548 12.7023 11.5006 12.6628 11.5156 12.6152L11.6321 12.2471L11.3216 12.0178C11.2814 11.988 11.3021 11.9243 11.3521 11.9239L11.7381 11.9209L11.8603 11.5547C11.876 11.5073 11.9431 11.5073 11.9589 11.5547Z"
      fill="#F5F5F5"
    />
    <path
      d="M11.9589 13.4706L12.081 13.8368L12.4671 13.8397C12.5171 13.8402 12.5377 13.9039 12.4976 13.9336L12.187 14.163L12.3035 14.5311C12.3186 14.5787 12.2643 14.6182 12.2236 14.5891L11.9096 14.3646L11.5955 14.5891C11.5548 14.6182 11.5006 14.5787 11.5156 14.5311L11.6321 14.163L11.3216 13.9336C11.2814 13.9039 11.3021 13.8402 11.3521 13.8397L11.7381 13.8368L11.8603 13.4706C11.876 13.4232 11.9431 13.4232 11.9589 13.4706Z"
      fill="#F5F5F5"
    />
    <path
      d="M13.446 6.78356L13.5681 7.14981L13.9542 7.15275C14.0042 7.15319 14.0249 7.21694 13.9847 7.24663L13.6741 7.47594L13.7906 7.844C13.8057 7.89163 13.7514 7.93113 13.7107 7.902L13.3967 7.6775L13.0826 7.902C13.0419 7.93113 12.9877 7.89163 13.0027 7.844L13.1192 7.47594L12.8087 7.24663C12.7685 7.21688 12.7892 7.15313 12.8392 7.15275L13.2252 7.14981L13.3474 6.78356C13.3631 6.73612 13.4301 6.73612 13.446 6.78356Z"
      fill="#F5F5F5"
    />
    <path
      d="M13.446 8.69944L13.5681 9.06569L13.9542 9.06863C14.0042 9.06906 14.0249 9.13275 13.9847 9.1625L13.6741 9.39187L13.7906 9.75994C13.8057 9.80756 13.7514 9.84706 13.7107 9.81794L13.3967 9.59344L13.0826 9.81794C13.0419 9.847 12.9877 9.80756 13.0027 9.75994L13.1192 9.39187L12.8087 9.1625C12.7685 9.13275 12.7892 9.06906 12.8392 9.06863L13.2252 9.06569L13.3474 8.69944C13.3631 8.65206 13.4301 8.65206 13.446 8.69944Z"
      fill="#F5F5F5"
    />
    <path
      d="M13.446 10.6154L13.5681 10.9816L13.9542 10.9846C14.0042 10.985 14.0249 11.0487 13.9847 11.0784L13.6741 11.3078L13.7906 11.6759C13.8057 11.7235 13.7514 11.763 13.7107 11.7339L13.3967 11.5094L13.0826 11.7339C13.0419 11.7629 12.9877 11.7236 13.0027 11.6759L13.1192 11.3078L12.8087 11.0784C12.7685 11.0487 12.7892 10.985 12.8392 10.9846L13.2252 10.9816L13.3474 10.6154C13.3631 10.5679 13.4301 10.5679 13.446 10.6154Z"
      fill="#F5F5F5"
    />
    <path
      d="M13.446 12.5313L13.5681 12.8975L13.9542 12.9004C14.0042 12.9009 14.0249 12.9646 13.9847 12.9943L13.6741 13.2237L13.7906 13.5918C13.8057 13.6394 13.7514 13.6789 13.7107 13.6498L13.3967 13.4253L13.0826 13.6498C13.0419 13.6788 12.9877 13.6394 13.0027 13.5918L13.1192 13.2237L12.8087 12.9943C12.7685 12.9647 12.7892 12.9009 12.8392 12.9004L13.2252 12.8975L13.3474 12.5313C13.3631 12.4838 13.4301 12.4838 13.446 12.5313Z"
      fill="#F5F5F5"
    />
    <path
      d="M13.446 14.4471L13.5681 14.8134L13.9542 14.8163C14.0042 14.8167 14.0249 14.8804 13.9847 14.9102L13.6741 15.1396L13.7906 15.5076C13.8057 15.5552 13.7514 15.5947 13.7107 15.5656L13.3967 15.3411L13.0826 15.5656C13.0419 15.5947 12.9877 15.5552 13.0027 15.5076L13.1192 15.1396L12.8087 14.9102C12.7685 14.8804 12.7892 14.8167 12.8392 14.8163L13.2252 14.8134L13.3474 14.4471C13.3631 14.3998 13.4301 14.3998 13.446 14.4471Z"
      fill="#F5F5F5"
    />
  </USAFlag>
);

const USAFlag = styled.svg`
  cursor: pointer;
  width: 48px;
  height: 32px;
  background: ${(props) =>
    props.isActive ? '#34395A' : 'rgba(255, 255, 255, 0.1)'};
  box-shadow: ${(props) =>
    props.isActive ? '0 0 0 2px #546ee5' : 'none'};
  border-radius: 4px;

  :hover {
    background: #34395a;
    box-shadow: 0 0 0 2px #546ee5;
  }
`;
