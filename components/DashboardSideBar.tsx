
import React from 'react'
import Image from 'next/image'


const OverviewIcon = () => {
    const svgIcon = `
      <svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" id="dashboard" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color">
        <path id="secondary" d="M21,7V4a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1V7a1,1,0,0,0,1,1h5A1,1,0,0,0,21,7ZM10,20V17a1,1,0,0,0-1-1H4a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1H9A1,1,0,0,0,10,20Z" style="fill: none; stroke: rgb(44, 169, 188); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
        <path id="primary" d="M9,12H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3H9a1,1,0,0,1,1,1v7A1,1,0,0,1,9,12Zm12,8V13a1,1,0,0,0-1-1H15a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h5A1,1,0,0,0,21,20Z" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
      </svg>
    `;
  
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: svgIcon }} />
      </div>
    );
  };

  const LoopIcon = () => {
    const svgIcon = `
    <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212ff2" stroke="#212ff2">

    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    
    <g id="SVGRepo_iconCarrier"> <title>loop</title> <desc>Created with sketchtool.</desc> <g id="media-player" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="loop" fill="#3aa7b8"> <path d="M6.8762659,15.1237341 C7.93014755,16.8486822 9.83062143,18 12,18 C14.6124377,18 16.8349158,16.3303847 17.6585886,14 L19.747965,14 C18.8598794,17.4504544 15.7276789,20 12,20 C9.28005374,20 6.87714422,18.6426044 5.43172915,16.5682708 L3,19 L3,13 L9,13 L6.8762659,15.1237341 Z M17.1245693,8.87543068 C16.0703077,7.15094618 14.1695981,6 12,6 C9.3868762,6 7.16381436,7.66961525 6.33992521,10 L4.25,10 C5.13831884,6.54954557 8.27134208,4 12,4 C14.7202162,4 17.123416,5.35695218 18.5692874,7.43071264 L21,5 L21,11 L15,11 L17.1245693,8.87543068 Z" id="Shape"> </path> </g> </g> </g>
    
    </svg>
  </svg>
  
    `;
  
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: svgIcon }} />
      </div>
    );
  };

  const NewLoopIcon = () => {
    const svgIcon = `
    <svg width="20px" height="20px" viewBox="0 0 73 73" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">

    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    
    <g id="SVGRepo_iconCarrier"> <title>architecture-and-paradigms/architecture/chain-of-responsibility</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="architecture-and-paradigms/architecture/chain-of-responsibility" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="container" transform="translate(2.000000, 2.000000)" fill="#FFFFFF" fill-rule="nonzero" stroke="#3aa7b8" stroke-width="2"> <rect id="mask" x="-1" y="-1" width="71" height="71" rx="14"> </rect> </g> <g id="broken-link" transform="translate(10.000000, 10.000000)" fill-rule="nonzero"> <g id="Group" fill="#4ACFD9"> <path d="M26.228582,12.2008691 L16.9283242,2.90071484 C15.0575898,1.0301875 12.5667969,0 9.91462305,0 C7.26244922,0 4.77155273,1.0301875 2.90071484,2.90081836 C-0.966628906,6.76826562 -0.966628906,13.0609805 2.90071484,16.9285312 L12.2008691,26.228582 C14.0716035,28.0992129 16.5626035,29.1295039 19.2147773,29.1295039 C21.8669512,29.1295039 24.3579512,28.0992129 26.228582,26.228582 C28.0992129,24.3578477 29.1295039,21.8669512 29.1295039,19.2147773 C29.1296074,16.5626035 28.0993164,14.071707 26.228582,12.2008691 Z M13.4407793,6.3884668 L22.7410371,15.6885176 C24.6853711,17.6329551 24.6853711,20.7967031 22.7411406,22.7411406 C20.7964961,24.6853711 17.632541,24.6853711 15.6884141,22.7411406 L11.0382852,18.0911152 L11.0382852,18.0912187 L6.38825977,13.4410898 C4.44392578,11.4966523 4.44392578,8.3329043 6.38825977,6.3884668 C8.33269727,4.4440293 11.4964453,4.4440293 13.4407793,6.3884668 Z" id="Shape"> </path> <path d="M50.0988711,36.0712617 L40.7987168,26.7710039 C38.9279824,24.900373 36.4370859,23.8701855 33.7849121,23.8701855 C31.1327383,23.8701855 28.6417383,24.900373 26.7711074,26.7710039 C24.900373,28.6417383 23.870082,31.1326348 23.870082,33.7848086 C23.870082,36.4370859 24.9002695,38.9280859 26.7711074,40.7987168 L36.0711582,50.0988711 C37.9418926,51.969502 40.4327891,52.9998965 43.0849629,52.9998965 C45.7371367,52.9998965 48.2281367,51.9696055 50.0987676,50.0988711 C51.9693984,48.2281367 52.999793,45.7372402 52.999793,43.0850664 C52.999793,40.4328926 51.9696055,37.9420996 50.0988711,36.0712617 Z M39.5588066,46.6113262 L34.9086777,41.9613008 L30.2586523,37.3111719 C28.3142148,35.3668379 28.3142148,32.2029863 30.2586523,30.2585488 C32.2029863,28.3142148 35.3667344,28.3142148 37.3111719,30.2585488 L46.6113262,39.5587031 C48.5556602,41.5031406 48.5556602,44.6668887 46.6113262,46.6113262 C44.6668887,48.5558672 41.5032441,48.5558672 39.5588066,46.6113262 Z" id="Shape"> </path> </g> <path d="M37.3887051,33.9013672 L17.5483828,14.0609414 C16.5867227,13.0993848 15.0223945,13.0993848 14.0609414,14.0609414 C13.5951211,14.5266582 13.3385059,15.1458887 13.3385059,15.8047656 C13.3385059,16.4635391 13.5951211,17.082873 14.0608379,17.5485898 L33.9011602,37.3888086 C34.3669805,37.8545254 34.9862109,38.1111406 35.6449844,38.1111406 C36.3036543,38.1111406 36.9229883,37.8545254 37.3887051,37.3888086 C37.8545254,36.9230918 38.1111406,36.3038613 38.1111406,35.6449844 C38.1110371,34.9863145 37.8544219,34.367084 37.3887051,33.9013672 Z" id="Shape" fill="#3aa7b8"> </path> <g id="Group" transform="translate(30.951172, 8.384766)" fill="#FD6A33"> <path d="M4.39123633,9.65614453 C4.18089258,9.65614453 3.97044531,9.57591992 3.80989258,9.41536719 C3.48889063,9.09436523 3.48889063,8.57378516 3.80989258,8.25288672 L8.41323242,3.64954688 C8.73433789,3.32854492 9.25481445,3.32854492 9.57581641,3.64954688 C9.89681836,3.97054883 9.89681836,4.49112891 9.57581641,4.81202734 L4.97247656,9.41536719 C4.81202734,9.57581641 4.60158008,9.65614453 4.39123633,9.65614453 Z" id="Shape"> </path> <path d="M0.883919922,8.20330273 C0.429796875,8.20330273 0.0619023438,7.83530469 0.0619023438,7.38128516 L0.0619023438,0.8711875 C0.0619023438,0.417167969 0.429796875,0.0491699219 0.883919922,0.0491699219 C1.33804297,0.0491699219 1.7059375,0.417167969 1.7059375,0.8711875 L1.7059375,7.38128516 C1.7059375,7.83530469 1.33804297,8.20330273 0.883919922,8.20330273 Z" id="Shape"> </path> <path d="M12.3541758,13.1634609 L5.84418164,13.1634609 C5.39005859,13.1634609 5.02216406,12.7954629 5.02216406,12.3414434 C5.02216406,11.8874238 5.39005859,11.5194258 5.84418164,11.5194258 L12.3541758,11.5194258 C12.8082988,11.5194258 13.1761934,11.8874238 13.1761934,12.3414434 C13.1761934,12.7953594 12.8080918,13.1634609 12.3541758,13.1634609 Z" id="Shape"> </path> </g> </g> </g> </g>
    
    </svg>
  
    `;
  
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: svgIcon }} />
      </div>
    );
  };

  const BoardIcon = () => {
    const svgIcon = `
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    
    <g id="SVGRepo_iconCarrier"> <path d="M17.8944 5.44721C18.1414 4.95324 17.9412 4.35256 17.4472 4.10557C16.9532 3.85858 16.3526 4.05881 16.1056 4.55279L13.6414 9.48107L11.0435 7.53264C10.3319 6.99895 9.31491 7.19817 8.85727 7.96089L6.14251 12.4855C5.85836 12.9591 6.01192 13.5733 6.4855 13.8575C6.95908 14.1416 7.57334 13.9881 7.85749 13.5145L10.287 9.46527L12.9207 11.4405C13.6694 12.0021 14.7438 11.7484 15.1624 10.9114L17.8944 5.44721Z" fill="#3aa7b8"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V14C1 15.6569 2.34315 17 4 17H10.438L5.35982 21.2318C4.93554 21.5853 4.87821 22.2159 5.23178 22.6402C5.58534 23.0645 6.21591 23.1218 6.64018 22.7682L11 19.135V22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22V19.135L17.3598 22.7682C17.7841 23.1218 18.4147 23.0645 18.7682 22.6402C19.1218 22.2159 19.0645 21.5853 18.6402 21.2318L13.562 17H20C21.6569 17 23 15.6569 23 14V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V14C3 14.5523 3.44772 15 4 15H20C20.5523 15 21 14.5523 21 14V4Z" fill="#3aa7b8"/> </g>
    
    </svg>
    `;
  
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: svgIcon }} />
      </div>
    );
  };


  const AllMatchesIcon = () => {
    const svgIcon = `
<svg fill="#3aa7b8" width="20px" height="20px" viewBox="0 0 32.00 32.00" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#3aa7b8" stroke-width="0.41600000000000004" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>network</title> <path d="M27 22.25c-0.831 0.002-1.598 0.277-2.215 0.739l0.010-0.007-3.299-2.998c0.82-1.097 1.313-2.479 1.313-3.977 0-1.614-0.572-3.094-1.525-4.249l0.009 0.011 3.644-3.643c0.584 0.391 1.302 0.624 2.074 0.624 2.077 0 3.76-1.683 3.76-3.76s-1.683-3.76-3.76-3.76c-2.077 0-3.76 1.683-3.76 3.76 0 0.773 0.233 1.491 0.633 2.088l-0.009-0.014-3.643 3.643c-1.145-0.944-2.627-1.517-4.244-1.517-0.937 0-1.828 0.192-2.638 0.54l0.044-0.017-1.032-1.874c0.791-0.688 1.288-1.695 1.288-2.819 0-2.060-1.67-3.729-3.729-3.729s-3.729 1.67-3.729 3.729c0 2.060 1.67 3.729 3.729 3.729 0.007 0 0.015-0 0.022-0h-0.001c0.398-0.006 0.778-0.073 1.133-0.194l-0.026 0.008 1.037 1.883c-1.757 1.243-2.89 3.265-2.894 5.553v0.001c0.010 0.697 0.125 1.364 0.33 1.99l-0.013-0.047-1.423 0.603c-0.681-0.971-1.795-1.597-3.056-1.597-2.056 0-3.722 1.666-3.722 3.722s1.666 3.722 3.722 3.722c2.056 0 3.722-1.666 3.722-3.722 0-0.264-0.027-0.521-0.079-0.769l0.004 0.024 1.419-0.602c1.167 2.093 3.367 3.485 5.892 3.485 1.73 0 3.308-0.654 4.5-1.728l-0.006 0.005 3.309 3.007c-0.335 0.544-0.535 1.201-0.539 1.906v0.001c0 2.071 1.679 3.75 3.75 3.75s3.75-1.679 3.75-3.75c0-2.071-1.679-3.75-3.75-3.75v0zM7.69 5c0-1.243 1.007-2.25 2.25-2.25s2.25 1.007 2.25 2.25c0 1.243-1.007 2.25-2.25 2.25v0c-1.242-0.002-2.248-1.008-2.25-2.25v-0zM5 22.92c-1.242-0.001-2.248-1.007-2.248-2.249s1.007-2.249 2.249-2.249c1.242 0 2.248 1.006 2.249 2.248v0c-0.002 1.242-1.008 2.248-2.25 2.25h-0zM27 2.75c1.243 0 2.25 1.007 2.25 2.25s-1.007 2.25-2.25 2.25c-1.243 0-2.25-1.007-2.25-2.25v0c0.002-1.242 1.008-2.248 2.25-2.25h0zM10.69 16c0-0 0-0 0-0.001 0-2.932 2.377-5.309 5.309-5.309s5.309 2.377 5.309 5.309c0 2.932-2.377 5.309-5.309 5.309h-0c-2.931-0.003-5.306-2.378-5.31-5.308v-0zM27 28.25c-1.243 0-2.25-1.007-2.25-2.25s1.007-2.25 2.25-2.25c1.243 0 2.25 1.007 2.25 2.25v0c-0.002 1.242-1.008 2.248-2.25 2.25h-0z"></path> </g></svg>    `;
  
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: svgIcon }} />
      </div>
    );
  };


  const ApplicationIcon = () => {
    const svgIcon = `
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    
    <g id="SVGRepo_iconCarrier"> <path d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H10M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V10M9 17H11.5M9 13H14M9 9H10M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z" stroke="#3aa7b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
    
    </svg>
`  
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: svgIcon }} />
      </div>
    );
  };


  
  const QuestionIcon = () => {
    const svgIcon = `
    <svg width="20px" height="20px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#3aa7b8" stroke="#3aa7b8" stroke-width="0.00048000000000000007">

    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    
    <g id="SVGRepo_iconCarrier"> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"/> </g> <g id="Layer_7" data-name="Layer 7"> <path d="M24,2.1,6,8.1V26.3c0,9.1,13.3,17.2,17,19.4a1.8,1.8,0,0,0,2,0c3.8-2.1,17-10.3,17-19.4V8.1ZM24,38a2,2,0,1,1,2-2A2,2,0,0,1,24,38Zm3.8-11a3.7,3.7,0,0,0-1.6,1.7A1.9,1.9,0,0,1,24.4,30h-.8a2.1,2.1,0,0,1-1.1-2.6,7.1,7.1,0,0,1,3.7-3.9A4.9,4.9,0,0,0,25,14.1a5.3,5.3,0,0,0-4.2,1A5.3,5.3,0,0,0,19,18.9a2,2,0,0,1-4,0,9,9,0,0,1,3.2-6.8,8.7,8.7,0,0,1,7.6-1.9,8.7,8.7,0,0,1,7,6.9A8.9,8.9,0,0,1,27.8,27Z"/> </g> </g> </g>
    
    </svg>
`  
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: svgIcon }} />
      </div>
    );
  };



  const MessageIcon = () => {
    const svgIcon = `
    <svg width="22px" height="22px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003">

    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    
    <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M19 2.75C17.7574 2.75 16.75 3.75736 16.75 5C16.75 6.24264 17.7574 7.25 19 7.25C20.2426 7.25 21.25 6.24264 21.25 5C21.25 3.75736 20.2426 2.75 19 2.75ZM15.25 5C15.25 2.92893 16.9289 1.25 19 1.25C21.0711 1.25 22.75 2.92893 22.75 5C22.75 7.07107 21.0711 8.75 19 8.75C16.9289 8.75 15.25 7.07107 15.25 5ZM9.94359 3.25L13 3.25C13.4142 3.25 13.75 3.58579 13.75 4C13.75 4.41421 13.4142 4.75 13 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976C4.70476 5.02502 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02502 6.70476 2.88976 7.71085C2.75159 8.73851 2.75 10.0932 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02502 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H14C15.9068 19.25 17.2615 19.2484 18.2892 19.1102C19.2952 18.975 19.8749 18.7213 20.2981 18.2981C20.7213 17.8749 20.975 17.2952 21.1102 16.2892C21.2484 15.2615 21.25 13.9068 21.25 12C21.25 11.6271 21.2527 11.3546 21.255 11.1204C21.2587 10.7412 21.2615 10.4622 21.2502 10.0191C21.2397 9.60498 21.5669 9.26077 21.9809 9.25024C22.395 9.23972 22.7392 9.56686 22.7498 9.98094C22.7616 10.447 22.7586 10.7652 22.7547 11.1672C22.7525 11.4012 22.75 11.6635 22.75 12V12.0564C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0564 20.75H9.94359C8.10583 20.75 6.65019 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33855 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40313C6.65019 3.24997 8.10582 3.24998 9.94359 3.25ZM5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291C15.6792 8.95774 16.1521 9.00073 16.4173 9.31894C16.6824 9.63715 16.6395 10.1101 16.3212 10.3752L16.2837 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60272 11.1452 7.71637 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986Z" fill="#3aa7b8"/> </g>
    
    </svg>
`  
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: svgIcon }} />
      </div>
    );
  };


const DashboardSideBar = () => {
  
  return (
    <>
        <nav className="nav-hb9 nav-xoi nav-oq6 theme--d2l style-afcPf" id="style-afcPf">
            <div className="content-v6b">
                <div className="d-7ft align-spi style-bKSOr" id="style-bKSOr"><Image alt='logo' width={50} height={50} src="https://app.loopcv.pro/img/logos/loopcv.svg" className="sidebar-2lp" /></div>
                <div className="list-2o8 v-3od theme--d2l list-wtp">
                    <div className="pa-93y item-2i2 theme--d2l item-oik text-tyr"><a href="/dashboard" className="item-hnt item-lc8 item-rmm item-n2d theme--d2l sidebar-43n">
                            <div className="item-5c7" >
                                <OverviewIcon />
                                </div>
                            <div className="content-sx2"  >
                                <div className="title-g5r select-qnv" >Overview</div>
                            </div>
                        </a>

                        <a href="/myapplications" className="item-rmm item-n2d theme--d2l sidebar-43n">
                            <div className="item-5c7">
                                <ApplicationIcon />
                               
                                </div>
                            <div className="content-sx2">
                                <div className="title-g5r">My Applications</div>
                            </div>
                        </a>

                        <a href="/analyzer" className="item-rmm item-n2d theme--d2l sidebar-43n">
                            <div className="item-5c7">
                                <LoopIcon />
                          
                                </div>
                            <div className="content-sx2">
                                <div className="title-g5r">CV Analyzer</div>
                            </div>
                        </a>
                        
                        {/* <a href="/loops/create" className="item-rmm item-n2d theme--d2l sidebar-43n">
                            
                            <div className="item-5c7">
                            <NewLoopIcon />

                                
                                </div> 
                            <div className="content-sx2">
                                <div className="title-g5r">New loop</div>
                            </div>
                        </a> */}
                        
                      
                        
                        <a href="/all-matches" className="item-rmm item-n2d theme--d2l sidebar-43n">
                            <div className="item-5c7">
                                

                                <AllMatchesIcon />
                                </div>
                            <div className="content-sx2">
                                <div className="title-g5r">All Matches</div>
                            </div>
                        </a>
                      
                        <a href="/" className="item-rmm item-n2d theme--d2l sidebar-43n">
                            <div className="item-5c7">
                           
                                <BoardIcon />
                                </div>
                            <div className="content-sx2">
                                <div className="title-g5r">Trending Jobs</div>
                            </div>
                        </a>
                        
                       </div>
                </div>
            </div>
            <div>
                <div className="pa-93y pb-zg1"><a href="https://www.loopcv.pro/help" className="sidebar-43n btn-o3f btn-mxf btn-pla theme--d2l fa-bol text-96t style-TxwoN" id="style-TxwoN"><span className="content-qye"> Help - FAQ</span></a><a href="/profile" className="sidebar-43n btn-o3f btn-ktb btn-nbk btn-pla theme--d2l fa-bol pri-4ri style-BBPof" id="style-BBPof"><span className="content-qye"> Profile </span></a></div>
            </div>
            <div className="nav-p2f"></div>
        </nav>
    </>
  )
}

export default DashboardSideBar