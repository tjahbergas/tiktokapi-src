const svgSymbol = [
'<div style="height: 0; position: absolute; top: -1000px">',
'<svg xmlns="http://www.w3.org/2000/svg">',
'<symbol id="icon-downloaded" viewBox="0 0 16 16">',
'    <path d="M6.445 11.858c-.421 0-.824-.168-1.12-.467L3.333 9.403A1 1 0 1 1 4.747 7.99l1.698 1.696 4.808-4.808a1 1 0 0 1 1.414 1.415l-5.103 5.103c-.296.297-.7.464-1.12.463l.001-.001Z"/>',
'    <path fill-rule="evenodd" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Z" clip-rule="evenodd"/>',
'</symbol>',
'<symbol id="icon-downloading" viewBox="0 0 16 16">',
'    <path d="M9.01 8.49h1.453a.67.67 0 0 1 .47 1.141l-2.246 2.245a.957.957 0 0 1-1.354 0L5.088 9.63a.671.671 0 0 1 .47-1.14H7.01V4.84a1 1 0 0 1 2 0v3.65Z"/>',
'    <path fill-rule="evenodd" d="M0 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm3-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z" clip-rule="evenodd"/>',
'</symbol>',
'<symbol id="icon-exit" viewBox="0 0 16 16">',
'    <path d="M8.5 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.5a1 1 0 0 0 1-1v-3h2v3a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h5.5a3 3 0 0 1 3 3v3h-2V3a1 1 0 0 0-1-1Z"/>',
'    <path d="M12.473 7.038V5.64a.649.649 0 0 1 .399-.591.644.644 0 0 1 .698.137l2.16 2.164a.92.92 0 0 1 0 1.304l-2.16 2.162a.646.646 0 0 1-1.097-.453V8.965H8.962A.961.961 0 0 1 8 8.002a.964.964 0 0 1 .962-.964h3.511Z"/>',
'</symbol>',
'<symbol id="icon-failed" viewBox="0 0 16 16">',
'    <path d="M12.021 5.4 9.435 7.988l2.586 2.586a1 1 0 0 1-1.415 1.415L8.021 9.402 5.433 11.99a.998.998 0 1 1-1.412-1.413l2.586-2.588-2.594-2.593A1 1 0 0 1 5.428 3.98L8.02 6.574l2.589-2.586A1 1 0 0 1 12.02 5.4h.001Z"/>',
'    <path fill-rule="evenodd" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Z" clip-rule="evenodd"/>',
'</symbol>',
'<symbol id="icon-folder" viewBox="0 0 16 16">',
'    <path fill-rule="evenodd" d="M.879 1.879A3 3 0 0 1 3 1h3.715a3 3 0 0 1 2.041.802l.849.788a1 1 0 0 0 .68.267H13a3 3 0 0 1 3 3V13a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V4a3 3 0 0 1 .879-2.121Zm1.414 1.414A1 1 0 0 0 2 4v2h12v-.143a1 1 0 0 0-1-1h-2.715a3 3 0 0 1-2.041-.801l-.849-.789A1 1 0 0 0 6.715 3H3a1 1 0 0 0-.707.293Zm0 10.414A1 1 0 0 1 2 13V8h12v5a1 1 0 0 1-1 1H3a1 1 0 0 1-.707-.293Z" clip-rule="evenodd"/>',
'</symbol>',
'<symbol id="icon-github" viewBox="0 0 16 16">',
'    <path fill-rule="evenodd" d="M8 0C3.582 0 0 3.672 0 8.202c0 3.624 2.292 6.699 5.47 7.784.4.075.547-.178.547-.395 0-.195-.007-.841-.01-1.527-2.226.496-2.696-.968-2.696-.968-.364-.948-.888-1.2-.888-1.2-.726-.51.055-.498.055-.498.803.058 1.226.845 1.226.845.713 1.254 1.871.891 2.328.682.072-.53.28-.892.508-1.097-1.777-.207-3.645-.91-3.645-4.054 0-.895.313-1.627.825-2.201-.083-.207-.357-1.041.077-2.171 0 0 .672-.22 2.2.84A7.495 7.495 0 0 1 8 3.967c.68.004 1.364.095 2.004.277C11.53 3.18 12.2 3.402 12.2 3.402c.436 1.13.162 1.964.08 2.17.512.575.822 1.307.822 2.202 0 3.15-1.87 3.844-3.652 4.048.287.254.543.753.543 1.518 0 1.098-.01 1.981-.01 2.251 0 .218.144.475.55.394C13.71 14.899 16 11.825 16 8.203 16 3.673 12.418 0 8 0Z" clip-rule="evenodd"/>',
'    <path d="M3.03 11.777c-.017.041-.08.053-.137.025-.058-.026-.091-.082-.072-.123.017-.041.08-.053.138-.025.058.026.09.082.07.123Zm.324.371c-.038.036-.113.019-.163-.038-.053-.057-.062-.134-.024-.17.04-.037.112-.02.164.038.053.057.063.133.023.17Zm.316.472c-.05.035-.13.002-.18-.07-.049-.074-.049-.161.002-.196.05-.035.129-.003.179.069.048.074.048.161-.002.197Zm.431.456c-.044.05-.137.037-.205-.031-.07-.066-.09-.16-.045-.21.044-.05.138-.035.207.032.07.066.09.16.043.21Zm.597.264c-.02.065-.11.095-.2.067-.09-.028-.15-.103-.132-.168.02-.065.11-.095.201-.066.09.028.15.103.13.168Zm.654.05c.002.068-.074.124-.17.125-.095.002-.173-.052-.174-.119 0-.068.076-.123.171-.126.095-.002.173.053.173.12Zm.61-.106c.011.066-.055.134-.15.152-.092.018-.178-.023-.19-.089-.012-.068.056-.135.148-.153.094-.017.18.022.192.09Z"/>',
'</symbol>',
'<symbol id="icon-keeptop" viewBox="0 0 16 16">',
'    <path d="M5.538 7.51H6.99v3.65a1 1 0 1 0 2 0V7.51h1.452a.671.671 0 0 0 .47-1.14L8.668 4.125a.957.957 0 0 0-1.354 0L5.067 6.37a.67.67 0 0 0 .471 1.141V7.51Z"/>',
'    <path fill-rule="evenodd" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Z" clip-rule="evenodd"/>',
'</symbol>',
'<symbol id="icon-maximize" viewBox="0 0 16 16">',
'    <path d="M12.294 3.028a.532.532 0 0 1 .693.386.533.533 0 0 1-.015.293l-.684 2.075a.548.548 0 0 1-.904.226l-.337-.337L9.97 6.748a.508.508 0 0 1-.718-.718l1.077-1.077-.337-.337a.548.548 0 0 1 .226-.904l2.076-.684Zm-8.588 9.944a.532.532 0 0 1-.693-.386.532.532 0 0 1 .015-.293l.684-2.075a.548.548 0 0 1 .904-.226l.337.337L6.03 9.252a.508.508 0 0 1 .718.718l-1.077 1.077.337.337a.548.548 0 0 1-.226.904l-2.076.684Zm9.137-.129a.53.53 0 0 0 .129-.55l-.684-2.075a.548.548 0 0 0-.904-.226l-.337.337L9.97 9.252a.508.508 0 0 0-.718.718l1.077 1.077-.337.337a.548.548 0 0 0 .226.904l2.076.684c.21.07.415.005.55-.129h-.001ZM3.028 3.706a.532.532 0 0 1 .386-.693.532.532 0 0 1 .293.015l2.075.684c.388.128.51.619.226.904l-.337.337L6.748 6.03a.508.508 0 0 1-.718.718L4.953 5.671l-.337.337a.548.548 0 0 1-.904-.226l-.684-2.076Z"/>',
'    <path fill-rule="evenodd" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Z" clip-rule="evenodd"/>',
'</symbol>',
'<symbol id="icon-minimize" viewBox="0 0 16 16">',
'    <path d="M7.254 7.254a.534.534 0 0 0 .128-.552l-.686-2.083a.55.55 0 0 0-.907-.226l-.338.338-1.08-1.082a.51.51 0 1 0-.722.721l1.082 1.081-.338.338a.55.55 0 0 0 .226.907l2.083.686c.212.07.417.006.552-.128Zm2.044.128a.534.534 0 0 1-.68-.68l.686-2.083a.55.55 0 0 1 .907-.226l.338.338 1.08-1.082a.51.51 0 1 1 .722.721l-1.082 1.081.338.338a.55.55 0 0 1-.226.907l-2.083.686ZM6.702 8.618a.534.534 0 0 1 .68.68l-.686 2.083a.55.55 0 0 1-.907.226l-.338-.338-1.08 1.082a.51.51 0 0 1-.722-.721l1.082-1.081-.338-.338a.55.55 0 0 1 .226-.907l2.083-.686Zm1.916.68a.534.534 0 0 1 .68-.68l2.083.686a.55.55 0 0 1 .226.907l-.338.338 1.082 1.08a.51.51 0 0 1-.721.722l-1.081-1.082-.338.338a.55.55 0 0 1-.907-.226l-.686-2.083Z"/>',
'    <path fill-rule="evenodd" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Z" clip-rule="evenodd"/>',
'</symbol>',
'<symbol id="icon-paste" viewBox="0 0 32 32">',
'    <path fill="#FAEF93" d="M1 5.5a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2V30a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5.5Z"/>',
'    <path fill="#F5B982" d="M4 3.5a2 2 0 0 0-2 2V30a2 2 0 0 0 2 2v-1a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1v-1Z"/>',
'    <path fill="#DBD176" d="M28 32a2 2 0 0 0 2-2V5.5a2 2 0 0 0-2-2v1a1 1 0 0 1 1 1V30a1 1 0 0 1-1 1v1Z"/>',
'    <path fill="#F2F9FF" d="M27 6H5v23h18v-4h4V6Z"/>',
'    <path fill="#D6E1EF" d="M5 29V6h1v23H5Z" fill-rule="evenodd" clip-rule="evenodd"/>',
'    <path fill="#CFDCED" d="M24 26h2.5L24 28.5V26Z"/>',
'    <path fill="#B0C5E0" d="M18 2.5a2 2 0 1 0-4 0H9.5a1 1 0 0 0-1 1V6a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1H18Z"/>',
'    <path fill="#7094C6" d="M10.5 3V2A1.5 1.5 0 0 0 9 3.5V6a1.5 1.5 0 0 0 1.5 1.5v-1A.5.5 0 0 1 10 6V3.5a.5.5 0 0 1 .5-.5Z"/>',
'    <path fill="#989898" d="M7 12h18v-1H7v1Zm0 3h18v-1H7v1Zm18 3H7v-1h18v1ZM7 21h18v-1H7v1Zm3 6H7v-1h3v1Zm-3-3h18v-1H7v1Z"/>',
'    <path fill="#000000" d="M13.5 2a2.5 2.5 0 0 1 4.9 0h4.1A1.5 1.5 0 0 1 24 3.5h5a2 2 0 0 1 2 2V30a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2h5A1.5 1.5 0 0 1 9.5 2h4Zm2.45-1a1.5 1.5 0 0 0-1.5 1.5V3H9.5a.5.5 0 0 0-.5.5V6a.5.5 0 0 0 .5.5h13A.5.5 0 0 0 23 6V3.5a.5.5 0 0 0-.5-.5h-5.05v-.5a1.5 1.5 0 0 0-1.5-1.5ZM8 4.5H3a1 1 0 0 0-1 1V30a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V5.5a1 1 0 0 0-1-1h-5v1h4V26l-4 4H4V5.5h4v-1Zm14.5 3A1.5 1.5 0 0 0 24 6v.5h3V25h-4v4H5V6.5h3V6a1.5 1.5 0 0 0 1.5 1.5h13ZM26.586 26 24 28.586V26h2.586Z" fill-rule="evenodd" clip-rule="evenodd"/>',
'    <path fill="#D9D9D9" d="M16.908 23.035a1 1 0 0 1-1.816 0l-1.9-4.116a1 1 0 0 1 .907-1.419h3.802a1 1 0 0 1 .907 1.42l-1.9 4.114Z"/>',
'    <path fill="#242424" d="M16 10a1 1 0 0 0-1 1v6.5h-.9a1 1 0 0 0-.909 1.42l1.901 4.114a1 1 0 0 0 1.816 0l1.9-4.115a1 1 0 0 0-.907-1.419H17V11a1 1 0 0 0-1-1Zm-5 15a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1Z"/>',
'</symbol>',
'<symbol id="icon-pause" viewBox="0 0 16 16">',
'    <path d="M6.504 13.5H2.516A.529.529 0 0 1 2 12.984V3.016c0-.275.24-.516.516-.516h3.988c.275 0 .516.24.516.516v10.003c-.034.24-.24.481-.516.481Zm7.015 0H9.496a.529.529 0 0 1-.516-.516V3.016c0-.275.24-.516.516-.516h3.988c.275 0 .516.24.516.516v10.003c0 .24-.206.481-.481.481Z"/>',
'</symbol>',
'<symbol id="icon-quittop" viewBox="0 0 16 16">',
'    <path d="M5.538 7.51H6.99v3.65a1 1 0 1 0 2 0V7.51h1.452a.671.671 0 0 0 .47-1.14L8.668 4.125a.957.957 0 0 0-1.354 0L5.067 6.37a.67.67 0 0 0 .471 1.14Z"/>',
'    <path fill-rule="evenodd" d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Zm9.586 2H3a1 1 0 0 0-1 1v9.586l3.99-3.99v2.564c0 .084.005.167.016.249L3.414 14H13a1 1 0 0 0 1-1V3.414l-2.317 2.317a1.71 1.71 0 0 0-.056-.06l-1.356-1.357L12.586 2Z" clip-rule="evenodd"/>',
'</symbol>',
'<symbol id="icon-resume" viewBox="0 0 16 16">',
'    <path d="m3.976 2.535 8.871 5.183a.323.323 0 0 1 0 .55L3.976 13.45c-.204.137-.476-.034-.476-.274V2.809c0-.24.272-.377.476-.274Z"/>',
'</symbol>',
'<symbol id="icon-stop" viewBox="0 0 16 16">',
'    <path d="m9.872 8 3.776-3.776c.368-.368.46-.89.215-1.135l-.92-.921c-.246-.246-.768-.154-1.137.215L8 6.128 4.224 2.352c-.368-.368-.89-.46-1.135-.215l-.921.92c-.246.247-.154.768.215 1.137L6.128 8l-3.776 3.776c-.368.368-.46.89-.215 1.135l.92.921c.247.246.768.154 1.137-.215L8 9.872l3.776 3.776c.368.368.89.46 1.135.215l.921-.92c.246-.246.154-.768-.215-1.137L9.872 8Z"/>',
'</symbol>',
'<symbol id="icon-stopwatch" viewBox="0 0 16 16">',
'    <path fill-rule="evenodd" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Z" clip-rule="evenodd"/>',
'    <path d="M3.293 11.392a1 1 0 1 0 1.414 1.414l8.099-8.099a1 1 0 1 0-1.414-1.414l-8.1 8.099Zm.112-.82 1.07-1.07C3.747 8.979 3.5 8.426 3.5 8c0-.447.272-1.035 1.09-1.58.807-.538 2.008-.92 3.41-.92.157 0 .312.005.464.014l1.331-1.332A8.798 8.798 0 0 0 8 4C4.686 4 2 5.79 2 8c0 .98.528 1.877 1.405 2.572ZM8 12a8.848 8.848 0 0 1-1.63-.15l1.355-1.355c.09.003.183.005.275.005 1.402 0 2.604-.382 3.41-.92.818-.545 1.09-1.133 1.09-1.58 0-.403-.22-.92-.862-1.417l1.066-1.067C13.515 6.2 14 7.062 14 8c0 2.21-2.686 4-6 4Z"/>',
'    <path d="M8.234 9.986a2 2 0 0 0 1.752-1.752L8.234 9.986ZM7.977 6 6 7.977A2 2 0 0 1 7.977 6Z"/>',
'</symbol>',
'<symbol id="icon-unknown" viewBox="0 0 120 70">',
'    <path fill="#D9D9D9" d="M116 0H4a4 4 0 0 0-4 4v62a4 4 0 0 0 4 4h112a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Z"/>',
'    <path fill="#000" d="m62.772 42.871-.576-6.085 7.164-5.152.252-2.726-6.336-6.757-2.088-.373L51 27.452l1.656 3.174 9.036-5.04 3.996 4.256-6.336 4.592-.792 1.755.792 7.242 3.42-.56Zm.828 4.741-4.32-1.53-1.548 4.443 4.32 1.568 1.548-4.48Z"/>',
'</symbol>',
'<symbol id="icon-waiting" viewBox="0 0 16 16">',
'    <path d="M4 11h8v1H4v-1Zm8-3H4v1h8V8Zm0-3H4v1h8V5Z"/>',
'    <path fill-rule="evenodd" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Z" clip-rule="evenodd"/>',
'</symbol>',
'<symbol id="icon-watch" viewBox="0 0 16 16">',
'    <path fill-rule="evenodd" d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3Z" clip-rule="evenodd"/>',
'    <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>',
'    <path fill-rule="evenodd" d="M14 8c0 2.21-2.686 4-6 4s-6-1.79-6-4 2.686-4 6-4 6 1.79 6 4Zm-1.5 0c0 .447-.272 1.035-1.09 1.58-.806.538-2.008.92-3.41.92-1.402 0-2.603-.382-3.41-.92C3.771 9.035 3.5 8.447 3.5 8c0-.447.272-1.035 1.09-1.58.807-.538 2.008-.92 3.41-.92 1.402 0 2.604.382 3.41.92.818.545 1.09 1.133 1.09 1.58Z" clip-rule="evenodd"/>',
'</symbol>',
'</svg>',
'</div>'
]
document.body.insertAdjacentHTML("afterBegin", svgSymbol.join(""));