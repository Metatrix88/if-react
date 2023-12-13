import React from 'react';

// styles
import { useSpriteStyles } from './Sprite.styles';

export const Sprite = () => {
  const classes = useSpriteStyles();
  return (
    <svg className={classes.root}>
      <symbol id="logo" viewBox="0 0 205 40">
        <path d="M.84 11.024c-.206-.33-.397-.78-.574-1.35A6.033 6.033 0 0 1 0 7.874c0-1.17.25-2.01.752-2.52.532-.51 1.21-.765 2.036-.765h19.297c.207.33.398.78.575 1.35.177.57.266 1.17.266 1.8 0 1.17-.266 2.01-.797 2.52-.501.51-1.165.765-1.991.765h-4.913V31.81c-.325.09-.84.18-1.55.27-.678.09-1.356.135-2.035.135s-1.284-.06-1.815-.18c-.501-.09-.929-.27-1.283-.54-.354-.27-.62-.645-.797-1.125-.177-.48-.265-1.11-.265-1.89V11.024H.84ZM31.85 31.946c-.295.09-.768.18-1.417.27-.62.09-1.268.135-1.947.135-.65 0-1.24-.045-1.77-.135-.502-.09-.93-.27-1.284-.54a2.792 2.792 0 0 1-.84-1.08c-.178-.48-.266-1.095-.266-1.845V15.253c0-.69.118-1.275.354-1.755a4.35 4.35 0 0 1 1.106-1.35c.472-.39 1.048-.734 1.726-1.034a16.838 16.838 0 0 1 4.736-1.395c.856-.15 1.711-.225 2.567-.225 1.416 0 2.538.285 3.364.855.826.54 1.239 1.44 1.239 2.7 0 .42-.06.84-.177 1.26-.118.39-.266.75-.443 1.08a20.679 20.679 0 0 0-3.806.359c-.62.12-1.21.255-1.77.405a6.74 6.74 0 0 0-1.372.45v15.343ZM42.345 4.05c0-1.14.369-2.1 1.106-2.88.767-.78 1.77-1.17 3.01-1.17 1.24 0 2.228.39 2.965 1.17.767.78 1.151 1.74 1.151 2.88s-.384 2.1-1.15 2.88c-.738.779-1.727 1.169-2.966 1.169-1.24 0-2.242-.39-3.01-1.17-.737-.78-1.106-1.74-1.106-2.88Zm7.878 27.896c-.325.06-.812.135-1.46.225-.62.12-1.255.18-1.904.18s-1.239-.045-1.77-.135c-.502-.09-.93-.27-1.284-.54a2.79 2.79 0 0 1-.84-1.08c-.178-.48-.266-1.095-.266-1.845V10.44c.325-.06.797-.135 1.416-.225.65-.12 1.298-.18 1.948-.18.649 0 1.224.045 1.726.135.53.09.973.27 1.327.54.355.27.62.645.797 1.125.207.45.31 1.05.31 1.8v18.312ZM64.882 9.449c1.77 0 3.408.24 4.913.72 1.535.45 2.848 1.155 3.94 2.114 1.091.96 1.947 2.175 2.566 3.645.62 1.44.93 3.165.93 5.174 0 1.92-.266 3.6-.797 5.04s-1.283 2.654-2.257 3.644c-.974.96-2.154 1.68-3.54 2.16-1.358.48-2.878.72-4.56.72-1.268 0-2.448-.195-3.54-.585v7.47c-.295.089-.767.179-1.416.269-.65.12-1.314.18-1.992.18-.65 0-1.24-.045-1.77-.135-.502-.09-.93-.27-1.284-.54s-.62-.645-.797-1.125c-.177-.45-.265-1.05-.265-1.8V14.803c0-.81.162-1.47.487-1.98.354-.51.826-.975 1.416-1.394.915-.6 2.05-1.08 3.408-1.44 1.357-.36 2.877-.54 4.558-.54Zm.09 17.188c3.038 0 4.558-1.845 4.558-5.535 0-1.92-.384-3.344-1.151-4.274-.738-.93-1.815-1.395-3.23-1.395-.561 0-1.063.075-1.506.225a5.15 5.15 0 0 0-1.15.45v9.899c.354.18.737.33 1.15.45.413.12.856.18 1.328.18ZM105.466 31.811c-.325.09-.841.18-1.549.27-.679.09-1.357.135-2.036.135a8.28 8.28 0 0 1-1.815-.18 2.936 2.936 0 0 1-1.283-.54c-.354-.27-.62-.645-.797-1.125-.177-.48-.265-1.11-.265-1.89v-7.019h-8.498v10.349c-.325.09-.84.18-1.549.27-.679.09-1.357.135-2.036.135-.678 0-1.283-.06-1.815-.18-.501-.09-.929-.27-1.283-.54-.354-.27-.62-.645-.797-1.125-.177-.48-.265-1.11-.265-1.89V4.724c.324-.06.84-.135 1.549-.225.708-.12 1.387-.18 2.036-.18.678 0 1.269.06 1.77.18.531.09.974.27 1.328.54.354.27.62.645.796 1.125.178.48.266 1.11.266 1.89v7.2h8.498V4.723c.324-.06.84-.135 1.549-.225.708-.12 1.387-.18 2.036-.18.678 0 1.268.06 1.77.18.531.09.974.27 1.328.54.354.27.619.645.796 1.125.177.48.266 1.11.266 1.89v23.757ZM132.901 21.057c0 1.86-.28 3.525-.841 4.995-.561 1.44-1.357 2.654-2.39 3.644-1.003.99-2.213 1.74-3.629 2.25-1.417.51-2.995.765-4.736.765-1.741 0-3.319-.27-4.736-.81-1.416-.54-2.64-1.305-3.673-2.295-1.003-1.02-1.785-2.25-2.346-3.69-.56-1.44-.841-3.059-.841-4.859 0-1.77.281-3.374.841-4.814.561-1.44 1.343-2.655 2.346-3.645a10.468 10.468 0 0 1 3.673-2.34c1.417-.54 2.995-.81 4.736-.81 1.741 0 3.319.286 4.736.856 1.416.54 2.626 1.32 3.629 2.34 1.033.99 1.829 2.204 2.39 3.644.561 1.44.841 3.03.841 4.77Zm-15.491 0c0 1.83.34 3.24 1.018 4.23.708.96 1.682 1.44 2.921 1.44 1.24 0 2.184-.495 2.833-1.485.679-.99 1.018-2.385 1.018-4.185 0-1.8-.339-3.18-1.018-4.14-.679-.989-1.638-1.484-2.877-1.484-1.239 0-2.198.495-2.877 1.485-.678.96-1.018 2.34-1.018 4.14ZM136.572 10.439c.295-.09.752-.18 1.372-.27.649-.09 1.313-.135 1.991-.135.649 0 1.225.045 1.726.135.531.09.974.27 1.328.54.354.27.62.645.797 1.125.206.45.31 1.05.31 1.8v9.673c0 1.23.295 2.115.885 2.655.59.51 1.445.765 2.567.765.678 0 1.224-.06 1.637-.18.443-.12.782-.24 1.018-.36V10.439c.295-.09.753-.18 1.372-.27.649-.09 1.313-.135 1.992-.135.649 0 1.224.045 1.726.135.531.09.974.27 1.328.54.354.27.619.645.796 1.125.207.45.31 1.05.31 1.8v13.678c0 1.5-.619 2.624-1.859 3.374-1.032.66-2.272 1.155-3.717 1.485-1.417.36-2.966.54-4.648.54-1.593 0-3.068-.18-4.425-.54-1.328-.36-2.479-.915-3.453-1.665-.973-.75-1.726-1.71-2.257-2.88-.531-1.2-.796-2.64-.796-4.319V10.44ZM180.478 25.467c0 2.28-.841 4.064-2.523 5.354-1.682 1.29-4.161 1.935-7.436 1.935-1.239 0-2.39-.09-3.452-.27-1.062-.18-1.977-.45-2.744-.81-.737-.39-1.328-.87-1.77-1.44-.413-.57-.62-1.245-.62-2.024 0-.72.148-1.32.443-1.8.295-.51.649-.93 1.062-1.26.856.48 1.829.915 2.921 1.305 1.121.36 2.405.54 3.851.54.914 0 1.608-.135 2.08-.405.501-.27.752-.63.752-1.08 0-.42-.177-.75-.531-.99-.354-.24-.944-.435-1.77-.585l-1.328-.27c-2.567-.51-4.485-1.305-5.754-2.385-1.239-1.11-1.859-2.684-1.859-4.724 0-1.11.236-2.115.709-3.015a6.286 6.286 0 0 1 1.991-2.25c.856-.6 1.874-1.064 3.054-1.394 1.21-.33 2.538-.495 3.983-.495 1.092 0 2.11.09 3.054.27.974.15 1.815.39 2.523.72.708.33 1.269.765 1.682 1.304.413.51.619 1.125.619 1.845 0 .69-.132 1.29-.398 1.8-.236.48-.546.885-.929 1.215-.236-.15-.591-.3-1.063-.45-.472-.18-.988-.33-1.549-.45-.56-.15-1.136-.27-1.726-.36a9.82 9.82 0 0 0-1.549-.135c-.974 0-1.726.12-2.257.36-.531.21-.797.555-.797 1.035 0 .33.148.6.443.81.295.21.856.405 1.682.585l1.372.315c2.832.66 4.839 1.575 6.019 2.744 1.21 1.14 1.815 2.625 1.815 4.455ZM195.706 32.71c-1.741 0-3.364-.24-4.869-.719a11.498 11.498 0 0 1-3.895-2.25c-1.091-.99-1.962-2.234-2.611-3.734-.619-1.5-.929-3.255-.929-5.265 0-1.98.31-3.674.929-5.084.649-1.44 1.49-2.61 2.523-3.51a9.525 9.525 0 0 1 3.541-2.024 12.601 12.601 0 0 1 4.071-.675c1.564 0 2.981.24 4.249.72 1.299.48 2.405 1.14 3.32 1.98a8.426 8.426 0 0 1 2.168 3.014c.531 1.17.797 2.445.797 3.825 0 1.02-.28 1.8-.841 2.34-.561.54-1.342.884-2.346 1.034l-10.932 1.665c.325.99.989 1.74 1.992 2.25 1.003.48 2.154.72 3.452.72 1.21 0 2.346-.15 3.408-.45 1.092-.33 1.977-.705 2.656-1.125.472.3.87.72 1.195 1.26.324.54.487 1.11.487 1.71 0 1.35-.62 2.354-1.859 3.014-.944.51-2.007.855-3.187 1.035-1.18.18-2.287.27-3.319.27Zm-1.24-17.682c-.708 0-1.327.12-1.858.36-.502.24-.915.555-1.24.945-.324.36-.575.78-.752 1.26-.148.45-.236.915-.266 1.395l7.569-1.26c-.089-.6-.413-1.2-.974-1.8-.561-.6-1.387-.9-2.479-.9Z" />
      </symbol>
      <symbol id="night" viewBox="0 0 30 30">
        <path d="M25.61 10.61V4.39h-6.22L15 0l-4.39 4.39H4.39v6.22L0 15l4.39 4.39v6.22h6.22L15 30l4.39-4.39h6.22v-6.22L30 15l-4.39-4.39ZM15 22.958a7.924 7.924 0 0 1-3.316-.73c2.732-1.26 4.642-4.018 4.642-7.228s-1.91-5.968-4.642-7.228A7.924 7.924 0 0 1 15 7.042c4.39 0 7.958 3.568 7.958 7.958 0 4.39-3.568 7.958-7.958 7.958Z" />
      </symbol>
      <symbol id="login" viewBox="0 0 40 40">
        <path d="M20 0C8.96 0 0 8.96 0 20s8.96 20 20 20 20-8.96 20-20S31.04 0 20 0Zm0 6c3.32 0 6 2.68 6 6s-2.68 6-6 6-6-2.68-6-6 2.68-6 6-6Zm0 28.4c-5 0-9.42-2.56-12-6.44.06-3.98 8-6.16 12-6.16 3.98 0 11.94 2.18 12 6.16-2.58 3.88-7 6.44-12 6.44Z" />
      </symbol>
      <symbol id="menu" viewBox="0 0 24 16">
        <path d="M0 16h24v-2.667H0V16Zm0-6.667h24V6.667H0v2.666ZM0 0v2.667h24V0H0Z" />
      </symbol>
      <symbol id="search" viewBox="0 0 16 16">
        <path d="M11.435 10.063h-.723l-.256-.247a5.92 5.92 0 0 0 1.437-3.87 5.946 5.946 0 1 0-5.947 5.947 5.92 5.92 0 0 0 3.87-1.437l.247.256v.723L14.637 16 16 14.637l-4.565-4.574Zm-5.489 0A4.111 4.111 0 0 1 1.83 5.946 4.111 4.111 0 0 1 5.946 1.83a4.111 4.111 0 0 1 4.117 4.116 4.111 4.111 0 0 1-4.117 4.117Z" />
      </symbol>
      <symbol id="arrow" viewBox="0 0 9 21">
        <path
          stroke="#383838"
          strokeWidth="2"
          d="M.941 19.823 7.1 11.612a2 2 0 0 0 0-2.4L.941 1"
        />
      </symbol>
      <symbol id="close" viewBox="0 0 26 26">
        <path d="M26 1.486 24.514 0 13 11.514 1.486 0 0 1.486 11.514 13 0 24.514 1.486 26 13 14.486 24.514 26 26 24.514 14.486 13 26 1.486Z" />
      </symbol>
      <symbol id="google" viewBox="0 0 135 40">
        <path
          fill="#000"
          d="M130 40H5c-2.75 0-5-2.25-5-5V5c0-2.75 2.25-5 5-5h125c2.75 0 5 2.25 5 5v30c0 2.75-2.25 5-5 5Z"
        />
        <path
          fill="#A6A6A6"
          d="M130 .8a4.2 4.2 0 0 1 4.2 4.2v30a4.2 4.2 0 0 1-4.2 4.2H5A4.2 4.2 0 0 1 .8 35V5A4.2 4.2 0 0 1 5 .8h125Zm0-.8H5C2.25 0 0 2.25 0 5v30c0 2.75 2.25 5 5 5h125c2.75 0 5-2.25 5-5V5c0-2.75-2.25-5-5-5Z"
        />
        <path
          fill="#fff"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth=".2"
          d="M47.42 10.24c0 .84-.25 1.51-.75 2-.56.59-1.3.89-2.2.89-.87 0-1.6-.3-2.21-.9-.61-.6-.91-1.35-.91-2.23 0-.89.3-1.63.91-2.23.61-.6 1.34-.9 2.21-.9.43 0 .84.08 1.23.25.39.17.7.39.94.67l-.53.53c-.4-.47-.94-.71-1.64-.71-.63 0-1.18.22-1.64.67-.46.44-.69 1.02-.69 1.73s.23 1.29.69 1.73c.46.44 1.01.67 1.64.67.67 0 1.23-.22 1.68-.67.29-.29.46-.7.5-1.22h-2.18V9.8h2.91c.02.15.04.3.04.44ZM52.03 7.74H49.3v1.9h2.46v.72H49.3v1.9h2.73V13h-3.5V7h3.5v.74ZM55.28 13h-.77V7.74h-1.68V7h4.12v.74h-1.68V13h.01ZM59.94 13V7h.77v6h-.77ZM64.13 13h-.77V7.74h-1.68V7h4.12v.74h-1.68V13h.01ZM73.61 12.22c-.59.61-1.32.91-2.2.91-.88 0-1.61-.3-2.2-.91-.59-.61-.88-1.35-.88-2.22 0-.87.29-1.62.88-2.22.59-.61 1.32-.91 2.2-.91.87 0 1.6.3 2.2.91.59.61.89 1.35.89 2.22-.01.88-.3 1.62-.89 2.22Zm-3.83-.5c.44.45.99.67 1.63.67.64 0 1.19-.22 1.63-.67.44-.45.67-1.02.67-1.72s-.22-1.27-.67-1.72c-.44-.45-.99-.67-1.63-.67-.64 0-1.19.22-1.63.67-.44.45-.67 1.02-.67 1.72s.23 1.27.67 1.72ZM75.58 13V7h.94l2.92 4.67h.03l-.03-1.16V7h.77v6h-.8l-3.05-4.89h-.03l.03 1.16V13h-.78Z"
        />
        <path
          fill="#fff"
          d="M68.14 21.75c-2.35 0-4.27 1.79-4.27 4.25 0 2.45 1.92 4.25 4.27 4.25 2.35 0 4.27-1.8 4.27-4.25 0-2.46-1.92-4.25-4.27-4.25Zm0 6.83c-1.29 0-2.4-1.06-2.4-2.58 0-1.53 1.11-2.58 2.4-2.58 1.29 0 2.4 1.05 2.4 2.58 0 1.52-1.12 2.58-2.4 2.58Zm-9.32-6.83c-2.35 0-4.27 1.79-4.27 4.25 0 2.45 1.92 4.25 4.27 4.25 2.35 0 4.27-1.8 4.27-4.25 0-2.46-1.92-4.25-4.27-4.25Zm0 6.83c-1.29 0-2.4-1.06-2.4-2.58 0-1.53 1.11-2.58 2.4-2.58 1.29 0 2.4 1.05 2.4 2.58 0 1.52-1.11 2.58-2.4 2.58Zm-11.08-5.52v1.8h4.32c-.13 1.01-.47 1.76-.98 2.27-.63.63-1.61 1.32-3.33 1.32-2.66 0-4.74-2.14-4.74-4.8 0-2.66 2.08-4.8 4.74-4.8 1.43 0 2.48.56 3.25 1.29l1.27-1.27c-1.08-1.03-2.51-1.82-4.53-1.82-3.64 0-6.7 2.96-6.7 6.61 0 3.64 3.06 6.61 6.7 6.61 1.97 0 3.45-.64 4.61-1.85 1.19-1.19 1.56-2.87 1.56-4.22 0-.42-.03-.81-.1-1.13h-6.07v-.01Zm45.31 1.4c-.35-.95-1.43-2.71-3.64-2.71-2.19 0-4.01 1.72-4.01 4.25 0 2.38 1.8 4.25 4.22 4.25 1.95 0 3.08-1.19 3.54-1.88l-1.45-.97c-.48.71-1.14 1.18-2.09 1.18s-1.63-.44-2.06-1.29l5.69-2.35-.2-.48Zm-5.8 1.42c-.05-1.64 1.27-2.48 2.22-2.48.74 0 1.37.37 1.58.9l-3.8 1.58ZM82.63 30h1.87V17.5h-1.87V30Zm-3.06-7.3h-.07c-.42-.5-1.22-.95-2.24-.95-2.13 0-4.08 1.87-4.08 4.27 0 2.38 1.95 4.24 4.08 4.24 1.01 0 1.82-.45 2.24-.97h.06v.61c0 1.63-.87 2.5-2.27 2.5-1.14 0-1.85-.82-2.14-1.51l-1.63.68c.47 1.13 1.71 2.51 3.77 2.51 2.19 0 4.04-1.29 4.04-4.43v-7.64h-1.77v.69h.01Zm-2.15 5.88c-1.29 0-2.37-1.08-2.37-2.56 0-1.5 1.08-2.59 2.37-2.59 1.27 0 2.27 1.1 2.27 2.59.01 1.48-.99 2.56-2.27 2.56Zm24.39-11.08h-4.47V30h1.87v-4.74h2.61c2.07 0 4.1-1.5 4.1-3.88s-2.05-3.88-4.11-3.88Zm.04 6.02H99.2v-4.29h2.65c1.4 0 2.19 1.16 2.19 2.14 0 .98-.79 2.15-2.19 2.15Zm11.54-1.79c-1.35 0-2.75.6-3.33 1.91l1.66.69c.35-.69 1.01-.92 1.7-.92.96 0 1.95.58 1.96 1.61v.13c-.34-.19-1.06-.48-1.95-.48-1.79 0-3.6.98-3.6 2.81 0 1.67 1.46 2.75 3.1 2.75 1.25 0 1.95-.56 2.38-1.22h.06v.97h1.8v-4.79c.01-2.22-1.65-3.46-3.78-3.46Zm-.23 6.85c-.61 0-1.46-.31-1.46-1.06 0-.96 1.06-1.33 1.98-1.33.82 0 1.21.18 1.7.42a2.257 2.257 0 0 1-2.22 1.97ZM123.74 22l-2.14 5.42h-.06L119.32 22h-2.01l3.33 7.58-1.9 4.21h1.95L125.82 22h-2.08Zm-16.8 8h1.87V17.5h-1.87V30Z"
        />
        <path
          fill="#00A0FF"
          d="M10.44 7.54c-.29.31-.46.79-.46 1.4v22.12c0 .62.17 1.1.46 1.4l.07.07L22.9 20.15v-.3L10.51 7.47l-.07.07Z"
        />
        <path
          fill="#FFE000"
          d="m27.03 24.28-4.13-4.13v-.3l4.13-4.13.09.05 4.89 2.78c1.4.79 1.4 2.09 0 2.89l-4.89 2.78-.09.06Z"
        />
        <path
          fill="#FF3A44"
          d="M27.12 24.22 22.9 20 10.44 32.46c.46.49 1.22.55 2.08.06l14.6-8.3Z"
        />
        <path
          fill="#32A071"
          d="m27.12 15.78-14.61-8.3c-.86-.49-1.62-.43-2.08.06L22.9 20l4.22-4.22Z"
        />
        <path
          fill="#000"
          d="m27.03 24.13-14.52 8.25c-.81.46-1.54.43-2 .01l-.07.07.07.07c.47.42 1.19.45 2-.01l14.61-8.3-.09-.09Z"
          opacity=".2"
        />
        <path
          fill="#000"
          d="M10.44 32.32c-.29-.31-.46-.79-.46-1.4v.15c0 .62.17 1.1.46 1.4l.07-.07-.07-.08ZM32.01 21.3l-4.99 2.83.09.09L32 21.44c.7-.4 1.05-.92 1.05-1.44-.05.47-.4.94-1.04 1.3Z"
          opacity=".12"
        />
        <path
          fill="#fff"
          d="m12.51 7.62 19.5 11.08c.63.36.99.82 1.05 1.3 0-.52-.35-1.05-1.05-1.44L12.51 7.48c-1.4-.79-2.54-.13-2.54 1.47v.15c0-1.61 1.15-2.27 2.54-1.48Z"
          opacity=".25"
        />
      </symbol>
      <symbol id="app" viewBox="0 0 120 40">
        <path
          fill="#A6A6A6"
          d="M110.135 0H9.535c-.367 0-.73 0-1.095.002-.306.002-.61.008-.919.013C6.85.023 6.18.082 5.517.192a6.665 6.665 0 0 0-1.9.627A6.438 6.438 0 0 0 .193 5.522a12.993 12.993 0 0 0-.179 2.002c-.01.306-.01.614-.015.92V31.56c.005.31.006.61.015.921.008.671.068 1.34.18 2.002.11.663.32 1.306.624 1.905.303.598.701 1.143 1.179 1.614.473.477 1.019.875 1.618 1.179a6.7 6.7 0 0 0 1.901.63c.663.11 1.333.168 2.004.177.31.007.613.011.919.011.366.002.728.002 1.095.002h100.6c.359 0 .724 0 1.084-.002.304 0 .617-.004.922-.01.67-.01 1.338-.068 2-.178a6.805 6.805 0 0 0 1.908-.63A6.293 6.293 0 0 0 117.666 38a6.405 6.405 0 0 0 1.182-1.614c.302-.6.51-1.242.619-1.905.111-.661.173-1.33.185-2.002.004-.31.004-.61.004-.921.008-.364.008-.725.008-1.094V9.536c0-.366 0-.73-.008-1.092 0-.306 0-.614-.004-.92a13.57 13.57 0 0 0-.185-2.002 6.648 6.648 0 0 0-.619-1.904 6.469 6.469 0 0 0-2.799-2.8 6.77 6.77 0 0 0-1.908-.627c-.661-.11-1.33-.169-2-.176-.305-.005-.618-.011-.922-.013-.36-.002-.725-.002-1.084-.002Z"
        />
        <path
          fill="#000"
          d="M8.445 39.125c-.305 0-.602-.004-.904-.01a12.669 12.669 0 0 1-1.87-.164 5.88 5.88 0 0 1-1.656-.548 5.403 5.403 0 0 1-1.397-1.016 5.32 5.32 0 0 1-1.02-1.397 5.722 5.722 0 0 1-.544-1.657 12.41 12.41 0 0 1-.166-1.875c-.007-.21-.015-.913-.015-.913v-23.1s.009-.692.015-.895a12.37 12.37 0 0 1 .165-1.872 5.755 5.755 0 0 1 .544-1.662c.26-.518.603-.99 1.015-1.398A5.565 5.565 0 0 1 5.667 1.05C6.287.95 6.915.895 7.543.887l.902-.012h102.769l.913.013a12.37 12.37 0 0 1 1.858.162 5.933 5.933 0 0 1 1.671.548 5.589 5.589 0 0 1 2.415 2.42 5.74 5.74 0 0 1 .535 1.65c.104.623.162 1.254.174 1.886.003.284.003.588.003.89.008.375.008.732.008 1.092v20.929c0 .363 0 .718-.008 1.075 0 .325 0 .623-.004.93-.011.62-.069 1.24-.171 1.853a5.715 5.715 0 0 1-.54 1.67c-.263.513-.606.98-1.015 1.386-.409.414-.881.759-1.4 1.022a5.852 5.852 0 0 1-1.668.55c-.618.101-1.243.156-1.869.163-.293.007-.599.011-.897.011l-1.084.002-101.69-.002Z"
        />
        <path
          fill="#fff"
          d="M24.769 20.3a4.948 4.948 0 0 1 2.356-4.151 5.065 5.065 0 0 0-3.99-2.158c-1.68-.176-3.308 1.005-4.164 1.005-.872 0-2.19-.988-3.608-.958a5.315 5.315 0 0 0-4.473 2.727c-1.934 3.349-.492 8.27 1.361 10.977.927 1.325 2.01 2.805 3.428 2.753 1.387-.058 1.905-.885 3.58-.885 1.658 0 2.144.885 3.59.852 1.489-.025 2.426-1.332 3.32-2.67a10.96 10.96 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.92-4.4ZM22.037 12.211a4.872 4.872 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.66 4.634 4.634 0 0 0-1.143 3.36 4.099 4.099 0 0 0 3.236-1.53ZM42.302 27.14H37.57l-1.137 3.356h-2.005l4.484-12.418h2.083l4.483 12.418h-2.039l-1.136-3.356Zm-4.243-1.55h3.752l-1.85-5.446h-.051l-1.85 5.447ZM55.16 25.97c0 2.813-1.506 4.62-3.779 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484H46.63V21.442h1.8v1.506h.033a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622Zm-1.91 0c0-1.833-.948-3.038-2.393-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046ZM65.124 25.97c0 2.813-1.505 4.62-3.778 4.62a3.07 3.07 0 0 1-2.848-1.583h-.043v4.484h-1.859V21.442h1.799v1.506h.034a3.212 3.212 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622Zm-1.91 0c0-1.833-.947-3.038-2.392-3.038-1.42 0-2.375 1.23-2.375 3.038 0 1.824.955 3.046 2.375 3.046 1.445 0 2.392-1.197 2.392-3.046ZM71.71 27.036c.138 1.232 1.334 2.04 2.97 2.04 1.566 0 2.693-.808 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987-1.497 0-2.521.757-2.521 1.858 0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.793 3.778-2.754 0-4.614-1.42-4.734-3.667h1.902ZM83.346 19.3v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137.204-.004.408-.018.611-.043v1.463c-.34.064-.686.092-1.032.086-1.833 0-2.548-.689-2.548-2.444v-5.19h-1.316v-1.472h1.316V19.3h1.867ZM86.065 25.97c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.639-4.295 4.639-2.633 0-4.294-1.783-4.294-4.64Zm6.695 0c0-1.954-.895-3.108-2.401-3.108-1.506 0-2.4 1.163-2.4 3.108 0 1.962.894 3.106 2.4 3.106 1.506 0 2.401-1.144 2.401-3.106ZM96.186 21.442h1.772v1.541h.043a2.16 2.16 0 0 1 2.178-1.635c.214-.001.428.022.637.07v1.737a2.594 2.594 0 0 0-.835-.112 1.872 1.872 0 0 0-1.937 2.083v5.37h-1.858v-9.053ZM109.384 27.837c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.191-4.682 2.505 0 4.08 1.72 4.08 4.466v.637h-6.395v.112a2.353 2.353 0 0 0 .639 1.832 2.363 2.363 0 0 0 1.797.732 2.046 2.046 0 0 0 2.091-1.273h1.764Zm-6.282-2.702h4.526a2.166 2.166 0 0 0-.608-1.634 2.168 2.168 0 0 0-1.612-.664 2.293 2.293 0 0 0-2.306 2.298ZM37.826 8.731a2.64 2.64 0 0 1 2.808 2.965c0 1.906-1.03 3.002-2.808 3.002h-2.155V8.73h2.155Zm-1.228 5.123h1.125a1.876 1.876 0 0 0 1.968-2.146 1.882 1.882 0 0 0-1.968-2.134h-1.125v4.28ZM41.68 12.444a2.133 2.133 0 1 1 4.248 0 2.134 2.134 0 1 1-4.247 0Zm3.334 0c0-.976-.439-1.546-1.208-1.546-.773 0-1.207.57-1.207 1.546 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55ZM51.573 14.698h-.922l-.93-3.316h-.07l-.927 3.316h-.913l-1.242-4.503h.902l.806 3.436h.067l.925-3.436h.853l.926 3.436h.07l.803-3.436h.889l-1.237 4.503ZM53.853 10.195h.856v.715h.066a1.349 1.349 0 0 1 1.344-.802 1.466 1.466 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.034 1.034 0 0 0-1.075 1.142v2.634h-.889v-4.503ZM59.094 8.437h.888v6.26h-.888v-6.26ZM61.218 12.444a2.134 2.134 0 1 1 4.247 0 2.133 2.133 0 1 1-4.247 0Zm3.333 0c0-.976-.439-1.546-1.208-1.546-.773 0-1.207.57-1.207 1.546 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55ZM66.4 13.424c0-.81.604-1.277 1.676-1.344l1.22-.07v-.389c0-.476-.315-.744-.922-.744-.497 0-.84.182-.939.5h-.86c.09-.773.818-1.27 1.84-1.27 1.128 0 1.765.563 1.765 1.514v3.077h-.855v-.633h-.07a1.515 1.515 0 0 1-1.353.707 1.361 1.361 0 0 1-1.501-1.348Zm2.895-.384v-.377l-1.1.07c-.62.042-.9.253-.9.65 0 .405.351.641.834.641a1.064 1.064 0 0 0 1.166-.984ZM71.348 12.444c0-1.422.732-2.324 1.87-2.324a1.483 1.483 0 0 1 1.38.79h.067V8.437h.888v6.26h-.851v-.71h-.07a1.563 1.563 0 0 1-1.415.785c-1.145 0-1.869-.901-1.869-2.328Zm.918 0c0 .956.45 1.53 1.203 1.53.75 0 1.212-.583 1.212-1.526 0-.938-.468-1.53-1.212-1.53-.748 0-1.203.58-1.203 1.527ZM79.23 12.444a2.134 2.134 0 1 1 4.247 0 2.134 2.134 0 1 1-4.247 0Zm3.333 0c0-.976-.439-1.546-1.208-1.546-.772 0-1.207.57-1.207 1.546 0 .984.435 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55ZM84.67 10.195h.855v.715h.066a1.348 1.348 0 0 1 1.344-.802 1.466 1.466 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.034 1.034 0 0 0-1.075 1.142v2.634h-.889v-4.503ZM93.515 9.074v1.142h.976v.748h-.976v2.315c0 .472.195.679.637.679.113 0 .226-.008.339-.02v.74c-.16.028-.322.043-.484.045-.988 0-1.382-.348-1.382-1.216v-2.543h-.714v-.749h.715V9.074h.89ZM95.705 8.437h.88v2.482h.07a1.386 1.386 0 0 1 1.374-.807 1.485 1.485 0 0 1 1.55 1.679v2.907h-.889V12.01c0-.72-.335-1.084-.963-1.084a1.053 1.053 0 0 0-1.134 1.142v2.63h-.888v-6.26ZM104.761 13.482a1.823 1.823 0 0 1-1.951 1.303 2.047 2.047 0 0 1-2.08-2.324 2.083 2.083 0 0 1 1.212-2.172 2.08 2.08 0 0 1 .864-.181c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.191 1.191 0 0 0 1.199 1.29 1.08 1.08 0 0 0 1.072-.546h.855Zm-3.126-1.451h2.275a1.09 1.09 0 0 0-1.109-1.167 1.151 1.151 0 0 0-1.166 1.167Z"
        />
      </symbol>
      <symbol id="headset" viewBox="0 0 100 100">
        <path
          fill="#3077C6"
          d="M79.167 58.333V75h-8.334V58.333h8.334Zm-50 0V75H25a4.179 4.179 0 0 1-4.167-4.167v-12.5h8.334ZM50 4.167c-20.708 0-37.5 16.791-37.5 37.5v29.166c0 6.917 5.583 12.5 12.5 12.5h12.5V50H20.833v-8.333C20.833 25.542 33.875 12.5 50 12.5s29.167 13.042 29.167 29.167V50H62.5v33.333h16.667V87.5H50v8.333h25c6.917 0 12.5-5.583 12.5-12.5V41.667c0-20.709-16.792-37.5-37.5-37.5Z"
        />
      </symbol>
      <symbol id="forum" viewBox="0 0 100 100">
        <path
          fill="#3077C6"
          d="M62.5 16.667v29.166H21.542l-4.875 4.875V16.667H62.5Zm4.167-8.334H12.5A4.179 4.179 0 0 0 8.333 12.5v58.333L25 54.167h41.667A4.179 4.179 0 0 0 70.833 50V12.5a4.179 4.179 0 0 0-4.166-4.167ZM87.5 25h-8.333v37.5H25v8.333A4.179 4.179 0 0 0 29.167 75H75l16.667 16.667v-62.5A4.179 4.179 0 0 0 87.5 25Z"
        />
      </symbol>
      <symbol id="devices" viewBox="0 0 100 100">
        <path
          fill="#3077C6"
          d="M16.667 25h75v-8.333h-75c-4.584 0-8.334 3.75-8.334 8.333v45.833H0v12.5h58.333v-12.5H16.667V25Zm79.166 8.333h-25a4.179 4.179 0 0 0-4.166 4.167v41.667a4.179 4.179 0 0 0 4.166 4.166h25A4.179 4.179 0 0 0 100 79.167V37.5a4.179 4.179 0 0 0-4.167-4.167Zm-4.166 37.5H75V41.667h16.667v29.166Z"
        />
      </symbol>
      <symbol id="thumb-up" viewBox="0 0 100 100">
        <path
          fill="#3077C6"
          d="M87.5 33.333H61.208l3.959-19.041.125-1.334a6.272 6.272 0 0 0-1.834-4.416l-4.416-4.375-27.417 27.458a8.147 8.147 0 0 0-2.458 5.875v41.667c0 4.583 3.75 8.333 8.333 8.333H75a8.277 8.277 0 0 0 7.667-5.083L95.25 53.042A8.232 8.232 0 0 0 95.833 50v-8.333c0-4.584-3.75-8.334-8.333-8.334ZM87.5 50 75 79.167H37.5V37.5l18.083-18.083-4.625 22.25H87.5V50ZM4.167 37.5h16.666v50H4.167v-50Z"
        />
      </symbol>
      <symbol id="sing-up" viewBox="0 0 50 45">
        <path d="M28.652 34.748c0-2.056.511-4.03 1.473-5.79a54.137 54.137 0 0 0-2.782-1.472.362.362 0 0 1-.205-.338v-8.08a3.776 3.776 0 0 0 1.688-3.141V7.549A7.55 7.55 0 0 0 21.276 0h-1.8a7.55 7.55 0 0 0-7.549 7.55v8.377c0 1.31.675 2.465 1.688 3.14v8.081a.38.38 0 0 1-.205.338c-1.155.562-6.75 3.386-11.937 7.651A4.04 4.04 0 0 0 0 38.277v5.739h32.979a10.52 10.52 0 0 1-.788-.726 12.01 12.01 0 0 1-3.54-8.542Z" />
        <path d="M40.732 25.48c-5.114 0-9.267 4.154-9.267 9.268 0 5.115 4.153 9.268 9.267 9.268 5.115 0 9.268-4.153 9.268-9.268a9.266 9.266 0 0 0-9.268-9.267ZM46.154 36.1h-4.071v4.07h-2.7V36.1H35.31v-2.701h4.071v-4.071h2.7v4.071h4.072v2.7Z" />
      </symbol>
      <symbol id="square-logo" viewBox="0 0 54 12">
        <path d="M.586 3.61a1.586 1.586 0 0 1-.15-.36 1.644 1.644 0 0 1-.069-.48c0-.311.065-.535.196-.67a.723.723 0 0 1 .529-.204h5.014c.053.088.103.208.15.36.045.151.068.31.068.479 0 .311-.069.535-.207.67a.684.684 0 0 1-.517.204H4.323v5.537a3.08 3.08 0 0 1-.402.072 3.923 3.923 0 0 1-.53.035 2.1 2.1 0 0 1-.47-.047.753.753 0 0 1-.334-.144.647.647 0 0 1-.207-.3 1.518 1.518 0 0 1-.07-.503v-4.65H.587ZM8.643 9.182c-.077.024-.2.048-.368.071-.161.024-.33.036-.506.036-.169 0-.322-.012-.46-.036a.753.753 0 0 1-.334-.143.741.741 0 0 1-.218-.288 1.473 1.473 0 0 1-.07-.491V4.736c0-.184.032-.34.093-.468.069-.135.165-.255.287-.359.123-.104.273-.196.449-.276a4.308 4.308 0 0 1 1.23-.371c.223-.04.445-.06.667-.06.368 0 .66.076.874.228.215.143.322.383.322.719 0 .111-.015.223-.046.335-.03.104-.069.2-.115.288A5.243 5.243 0 0 0 9 4.975a1.722 1.722 0 0 0-.356.12v4.087ZM11.37 1.752c0-.304.096-.56.287-.767.2-.208.46-.311.782-.311s.58.103.77.311c.2.208.3.463.3.767s-.1.56-.3.767c-.19.208-.448.311-.77.311s-.582-.103-.782-.311a1.089 1.089 0 0 1-.287-.767Zm2.047 7.43c-.085.016-.211.036-.38.06a2.698 2.698 0 0 1-.954.012.753.753 0 0 1-.334-.144.741.741 0 0 1-.218-.288 1.473 1.473 0 0 1-.07-.491V3.454c.085-.016.208-.036.369-.06a2.712 2.712 0 0 1 .954-.012.762.762 0 0 1 .345.144.647.647 0 0 1 .207.3c.054.119.08.279.08.478v4.878ZM17.226 3.19c.46 0 .885.064 1.276.192.399.12.74.307 1.024.563.283.256.506.58.667.97.16.384.241.843.241 1.379 0 .51-.069.958-.207 1.342a2.7 2.7 0 0 1-.586.97c-.253.256-.56.448-.92.576a3.458 3.458 0 0 1-1.185.191c-.33 0-.636-.052-.92-.155v1.989c-.076.024-.199.048-.368.072a2.78 2.78 0 0 1-.517.048c-.169 0-.322-.012-.46-.036a.752.752 0 0 1-.334-.144.647.647 0 0 1-.207-.3 1.368 1.368 0 0 1-.069-.48V4.617c0-.216.043-.391.127-.527.092-.136.214-.26.368-.372.237-.16.533-.287.885-.383a4.517 4.517 0 0 1 1.185-.144Zm.023 4.578c.79 0 1.184-.492 1.184-1.474 0-.512-.1-.891-.299-1.139-.191-.247-.471-.371-.84-.371-.145 0-.275.02-.39.06a1.318 1.318 0 0 0-.3.12V7.6c.093.048.193.088.3.12.107.032.222.048.345.048ZM27.77 9.146a3.079 3.079 0 0 1-.402.072 3.922 3.922 0 0 1-.529.035c-.176 0-.333-.015-.471-.047a.753.753 0 0 1-.334-.144.647.647 0 0 1-.207-.3 1.518 1.518 0 0 1-.069-.503v-1.87H23.55v2.757a3.079 3.079 0 0 1-.402.072 3.922 3.922 0 0 1-.53.035 2.1 2.1 0 0 1-.47-.047.753.753 0 0 1-.334-.144.647.647 0 0 1-.207-.3 1.52 1.52 0 0 1-.07-.503V1.932c.085-.016.22-.036.403-.06.184-.032.36-.048.53-.048.176 0 .329.016.46.048a.762.762 0 0 1 .344.144.647.647 0 0 1 .207.3c.046.127.07.295.07.503v1.917h2.207V1.932a7.87 7.87 0 0 1 .403-.06c.184-.032.36-.048.529-.048.176 0 .33.016.46.048a.762.762 0 0 1 .345.144.647.647 0 0 1 .207.3c.046.127.069.295.069.503v6.327ZM34.899 6.282c0 .495-.073.938-.218 1.33a2.665 2.665 0 0 1-.621.97c-.261.264-.575.464-.943.6a3.533 3.533 0 0 1-1.23.203c-.453 0-.863-.072-1.231-.215a2.798 2.798 0 0 1-.955-.612c-.26-.271-.464-.599-.61-.982a3.621 3.621 0 0 1-.218-1.294c0-.472.073-.9.219-1.283.145-.383.349-.707.61-.97.267-.272.586-.48.954-.623a3.356 3.356 0 0 1 1.23-.216c.452 0 .863.076 1.23.228a2.6 2.6 0 0 1 .944.623c.268.263.475.587.62.97.146.384.219.807.219 1.27Zm-4.025 0c0 .487.088.862.265 1.126a.884.884 0 0 0 .759.384.82.82 0 0 0 .736-.396c.176-.264.264-.635.264-1.114 0-.48-.088-.847-.264-1.103a.848.848 0 0 0-.748-.395.848.848 0 0 0-.747.395c-.177.256-.265.623-.265 1.103ZM35.853 3.454c.076-.024.195-.048.356-.072.169-.024.341-.036.518-.036a2.5 2.5 0 0 1 .448.036.762.762 0 0 1 .345.144.647.647 0 0 1 .207.3c.054.119.08.279.08.478v2.577c0 .327.077.563.23.707.154.136.376.204.668.204a1.535 1.535 0 0 0 .69-.144V3.454c.076-.024.195-.048.356-.072.169-.024.341-.036.518-.036.168 0 .318.012.448.036a.762.762 0 0 1 .345.144.647.647 0 0 1 .207.3c.054.119.08.279.08.478v3.643c0 .4-.16.7-.482.9-.269.175-.59.307-.966.395-.368.095-.77.143-1.208.143-.414 0-.797-.048-1.15-.143a2.516 2.516 0 0 1-.897-.444 1.98 1.98 0 0 1-.586-.767c-.138-.32-.207-.703-.207-1.15V3.454ZM47.26 7.456c0 .607-.218 1.082-.655 1.426-.437.344-1.08.515-1.931.515a5.25 5.25 0 0 1-.898-.072 2.72 2.72 0 0 1-.713-.215 1.407 1.407 0 0 1-.46-.384.91.91 0 0 1-.16-.539c0-.192.038-.352.114-.48.077-.135.17-.247.276-.335.223.128.476.244.76.348.29.096.624.143 1 .143.238 0 .418-.036.54-.107.13-.072.196-.168.196-.288 0-.112-.046-.2-.138-.264-.092-.064-.245-.115-.46-.155l-.345-.072c-.667-.136-1.165-.348-1.495-.635-.322-.296-.483-.715-.483-1.259 0-.295.061-.563.184-.803.123-.24.295-.439.517-.599a2.55 2.55 0 0 1 .794-.371c.314-.088.66-.132 1.035-.132.284 0 .548.024.793.072.253.04.472.104.656.192.184.088.33.203.437.347.107.136.16.3.16.491a1.046 1.046 0 0 1-.344.803 1.215 1.215 0 0 0-.276-.12 2.686 2.686 0 0 0-.402-.12 4.076 4.076 0 0 0-.449-.095 2.493 2.493 0 0 0-.402-.036c-.253 0-.449.032-.587.096-.138.056-.207.148-.207.275 0 .088.038.16.115.216.077.056.222.108.437.156l.356.084c.736.175 1.258.42 1.564.73.315.304.472.7.472 1.187ZM51.218 9.385c-.453 0-.874-.064-1.265-.191a2.968 2.968 0 0 1-1.012-.6 2.847 2.847 0 0 1-.679-.994c-.16-.4-.241-.867-.241-1.402 0-.527.08-.979.241-1.354.169-.384.387-.695.656-.935a2.46 2.46 0 0 1 .92-.54c.345-.12.697-.179 1.058-.179.406 0 .774.064 1.104.192.337.128.624.303.862.527.245.224.433.491.564.803.138.311.207.65.207 1.018 0 .272-.073.48-.219.624-.146.143-.349.235-.61.275l-2.84.444c.084.263.257.463.518.599.26.128.56.191.897.191.314 0 .61-.04.885-.12.284-.087.514-.187.69-.299.123.08.226.192.31.336a.887.887 0 0 1 .127.455c0 .36-.16.627-.483.803a2.488 2.488 0 0 1-.828.275 5.6 5.6 0 0 1-.862.072Zm-.322-4.71c-.184 0-.345.033-.483.097a.94.94 0 0 0-.322.251c-.085.096-.15.208-.196.336a1.51 1.51 0 0 0-.069.371l1.967-.335c-.023-.16-.108-.32-.253-.48-.146-.16-.36-.24-.644-.24Z" />
      </symbol>
      <symbol id="review-icon" viewBox="0 0 54 54">
        <path d="M27 .333C12.28.333.333 12.28.333 27 .333 41.72 12.28 53.667 27 53.667c14.72 0 26.667-11.947 26.667-26.667C53.667 12.28 41.72.333 27 .333Zm0 8c4.427 0 8 3.574 8 8 0 4.427-3.573 8-8 8a7.99 7.99 0 0 1-8-8c0-4.426 3.573-8 8-8ZM27 46.2c-6.667 0-12.56-3.413-16-8.587.08-5.306 10.667-8.213 16-8.213 5.307 0 15.92 2.907 16 8.213-3.44 5.174-9.333 8.587-16 8.587Z" />
      </symbol>
      <symbol id="ua-flag" viewBox="0 0 640 480">
        <g fillRule="evenodd" strokeWidth="1pt">
          <path fill="gold" d="M0 0h640v480H0z" />
          <path fill="#0057b8" d="M0 0h640v240H0z" />
        </g>
      </symbol>
      <symbol id="usa-flag" viewBox="0 0 640 480">
        <path fill="#bd3d44" d="M0 0h640v480H0" />
        <path
          stroke="#fff"
          strokeWidth="37"
          d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
        />
        <path fill="#192f5d" d="M0 0h364.8v258.5H0" />
        <marker id="a" markerHeight="30" markerWidth="30">
          <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z" />
        </marker>
        <path
          fill="none"
          markerMid="url(#a)"
          d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60L0 0"
        />
      </symbol>
      <symbol id="de-flag" viewBox="0 0 640 480">
        <path fill="#ffce00" d="M0 320h640v160H0z" />
        <path d="M0 0h640v160H0z" />
        <path fill="#d00" d="M0 160h640v160H0z" />
      </symbol>
      <symbol id="closeModal" viewBox="0 0 21 21">
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </symbol>
      <symbol id="error" viewBox="0 0 24 24">
        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
      </symbol>
    </svg>
  );
};
