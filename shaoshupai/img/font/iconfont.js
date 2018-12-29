;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shezhi" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M606.6002 922.3466H421.39599214899323l-0.044-8.9349c-0.2019-41.4619-16.2077-80.4015-45.0693-109.6447-28.8307-29.2102-67.1013-45.2983-107.7625-45.2983-26.8969 0-53.3141 7.1961-76.3934 20.8089l-7.845 4.6269L91.7287 621.7774l7.6291-4.496c35.4345-20.8818 60.8103-54.3761 71.4536-94.3121 10.6462-39.9439 5.2896-81.6037-15.0824-117.3065-13.4934-23.656-33.003-43.2837-56.4191-56.7645l-7.7541-4.464 92.5961-162.1611 7.825 4.5559c23.4811 13.6717 50.0981 20.8978 76.974 20.8978 26.4342 0 52.5436-6.9113 75.506-19.9874 23.649-13.4669 43.3534-33.2085 56.9828-57.0923 13.5554-23.7079 20.6049-50.6986 20.391-78.0611l-0.071-9.0469 185.2652-0.029v8.979911619921694c0 85.9048 68.5724 155.7934 152.8598 155.7934 27.0118 0 53.5519-7.2781 76.7512-21.0457l7.854-4.6608 92.5731 162.183-7.6621 4.487c-73.4103 42.9939-98.8491 138.0184-56.7089 211.8264 13.4135 23.559 32.7881 43.1158 56.0324 56.5666l7.7251 4.471L843.9033 784.2493l-7.82-4.5279c-23.3881-13.5438-49.8863-20.703-76.6273-20.703-26.4312 0-52.5406 6.9123-75.507 19.9894-23.649 13.4669-43.3554 33.2055-56.9868 57.0823-13.4135 23.557-20.467 50.2729-20.389 77.2526L606.6002 922.3466zM439.0448 904.3898h149.78273817851846c1.3431-27.0177 9.0622-53.5337 22.5337-77.1927 15.2323-26.6799 37.2573-48.735 63.7015-63.7927 25.6687-14.6161 54.8511-22.3419 84.3933-22.3419 26.9089 0 53.5829 6.4756 77.6906 18.7983l74.9743-131.3539c-22.6196-14.747-41.5356-34.8364-55.03-58.5383-45.5171-79.7209-20.3371-181.6448 55.6826-231.532l-74.9503-131.31c-23.9987 12.5305-50.7557 19.116-77.9394 19.116-91.229 0-165.9834-73.1214-170.5925-164.7703l-149.6698 0.023c-1.2232 27.4094-8.9593 54.2242-22.5886 78.0611-15.2203 26.6709-37.2453 48.731-63.6905 63.7898-25.6657 14.6141-54.8471 22.3399-84.3923 22.3399-27.0528 0-53.8567-6.5396-78.0683-18.9861l-74.9783 131.308c22.7905 14.783 41.8384 34.9463 55.4208 58.7572 22.7275 39.83 28.7077 86.2925 16.8373 130.8293-11.0989 41.6428-36.5787 77.0108-72.1691 100.4699l74.9763 131.336c23.8728-12.3816 50.4959-18.8872 77.5497-18.8872 45.5021 0 88.3118 17.9858 120.5433 50.6417C419.1564 821.6439 436.7133 861.5689 439.0448 904.3898zM514.3259 666.2163c-99.9674 0-181.2957-82.2163-181.2957-183.2727 0-101.0575 81.3293-183.2747 181.2957-183.2747 99.9674 0 181.2967 82.2173 181.2967 183.2747C695.6226 584 614.2933 666.2163 514.3259 666.2163zM514.3259 317.6256c-90.0647 0-163.3381 74.1607-163.3381 165.3179 0 91.1552 73.2734 165.3149 163.3381 165.3149 90.0657 0 163.3391-74.1597 163.3391-165.3149C677.665 391.7874 604.3916 317.6256 514.3259 317.6256z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-liebiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M128.007168 295.315456l769.184768 0c12.493824 0 22.623232-10.128384 22.623232-22.623232s-10.129408-22.623232-22.623232-22.623232L128.007168 250.068992c-12.494848 0-22.623232 10.128384-22.623232 22.623232S115.513344 295.315456 128.007168 295.315456z"  ></path>' +
    '' +
    '<path d="M897.19296 487.612416 128.007168 487.612416c-12.494848 0-22.623232 10.128384-22.623232 22.623232s10.128384 22.623232 22.623232 22.623232l769.184768 0c12.493824 0 22.623232-10.128384 22.623232-22.623232S909.686784 487.612416 897.19296 487.612416z"  ></path>' +
    '' +
    '<path d="M897.19296 725.153792 128.007168 725.153792c-12.494848 0-22.623232 10.129408-22.623232 22.623232s10.128384 22.623232 22.623232 22.623232l769.184768 0c12.493824 0 22.623232-10.129408 22.623232-22.623232S909.686784 725.153792 897.19296 725.153792z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-share" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M809.654272 829.29664c0 10.187776-8.261632 18.450432-18.432 18.450432L144.950272 847.747072c-10.187776 0-18.432-8.261632-18.432-18.450432L126.518272 294.786048c0-10.187776 8.244224-18.432 18.432-18.432l166.211584 0 0-36.864L127.670272 239.490048c-20.358144 0-36.864 16.488448-36.864 36.864l0 571.392c0 20.358144 16.505856 36.845568 36.864 36.845568L808.502272 884.591616c20.358144 0 36.864-16.488448 36.864-36.845568l0-221.184-35.712 0L809.654272 829.29664zM932.864 250.451968l0.180224-0.342016-8.045568-4.391936-22.93248-13.78816-0.59392 0.954368-178.59584-97.487872-17.640448 33.030144 150.173696 81.036288c-229.896192 27.305984-407.501824 189.737984-407.501824 427.91424 0 11.052032 0.900096 21.869568 1.655808 32.7424l42.210304-0.018432c-0.864256-11.052032-1.691648-22.104064-1.691648-33.389568 0-218.73664 164.484096-363.780096 376.380416-387.03616l-89.730048 145.584128 31.806464 19.781632 105.929728-173.717504 0.971776 0.52224 13.121536-23.652352 4.608-7.560192L932.864 250.451968z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-more" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M184.41216 421.855232c-49.990656 0-90.499072 40.516608-90.499072 90.49088 0 49.975296 40.50944 90.492928 90.499072 90.492928 49.975296 0 90.483712-40.517632 90.483712-90.492928C274.896896 462.37184 234.387456 421.855232 184.41216 421.855232z"  ></path>' +
    '' +
    '<path d="M512.442368 421.855232c-49.989632 0-90.498048 40.516608-90.498048 90.49088 0 49.975296 40.50944 90.492928 90.498048 90.492928 49.99168 0 90.483712-40.517632 90.483712-90.492928C602.92608 462.37184 562.434048 421.855232 512.442368 421.855232z"  ></path>' +
    '' +
    '<path d="M838.038528 421.855232c-49.974272 0-90.483712 40.516608-90.483712 90.49088 0 49.975296 40.510464 90.492928 90.483712 90.492928 49.989632 0 90.500096-40.517632 90.500096-90.492928C928.538624 462.37184 888.02816 421.855232 838.038528 421.855232z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-comment" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M876.032 736 512 736l-280 195.968L232 736 147.968 736C101.568 736 64 698.368 64 652.032L64 176c0-46.4 37.568-83.968 83.968-83.968l728 0C922.368 92.032 960 129.6 960 176l0 476.032C960 698.368 922.368 736 876.032 736zM904 190.016c0-23.168-18.816-41.984-41.984-41.984L161.984 148.032c-23.168 0-41.984 18.816-41.984 41.984l0 448c0 23.232 18.816 41.984 41.984 41.984L288 680l0 140.032 195.968-140.032 377.984 0c23.168 0 41.984-18.752 41.984-41.984L903.936 190.016z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M727.082078 504.818437c-34.771945-6.743588-17.872043-25.458835-17.872043-25.458835s34.024931-56.081273-6.733355-96.849792c-50.510394-50.495044-173.252903 6.424316-173.252903 6.424316-46.873564 14.546298-34.453696-6.639211-27.823696-42.694381 0-42.478464-14.551414-114.372887-139.429563-71.90875-124.758422 42.694381-231.874021 192.282305-231.874021 192.282305-74.487481 99.398848-64.62588 176.22663-64.62588 176.22663 18.605753 169.597653 198.817138 216.151945 338.984505 227.169883 147.46354 11.568477 346.486362-50.828642 406.841985-179.014116C871.637382 562.595328 761.97375 511.776919 727.082078 504.818437L727.082078 504.818437zM415.368684 822.183552c-146.392138 6.839779-264.736477-66.561975-264.736477-164.254971 0-97.792257 118.344339-176.221514 264.736477-182.970218 146.490376-6.743588 265.064958 53.607942 265.064958 151.20577C680.432619 723.842803 561.85906 815.534108 415.368684 822.183552L415.368684 822.183552zM386.162502 539.376511c-147.240459 17.2335-130.225947 155.146523-130.225947 155.146523s-1.50733 43.665499 39.476083 65.908082c86.155219 46.663786 174.859493 18.411325 219.687468-39.460734C559.938314 663.077857 533.616832 522.261715 386.162502 539.376511L386.162502 539.376511zM349.025697 732.942041c-27.495214 3.216251-49.641607-12.625552-49.641607-35.631522 0-22.89443 19.678178-46.873564 47.182602-49.747008 31.579229-3.00238 52.126194 15.189957 52.126194 38.193881C398.691863 708.653869 376.410394 729.828121 349.025697 732.942041L349.025697 732.942041zM435.813319 659.002029c-9.307993 6.958482-20.770046 5.996574-25.683962-2.349511-5.131881-8.140401-3.208065-21.188578 6.209422-28.043706 10.914584-8.119935 22.257933-5.785773 27.170826 2.364861C448.443987 639.308501 444.917674 651.828652 435.813319 659.002029L435.813319 659.002029zM798.776957 445.104427c11.867282 0 21.951965-8.773827 23.647583-20.221554 0.214894-0.856507 0.319272-1.600451 0.319272-2.567475C840.726372 260.643252 690.264545 288.466947 690.264545 288.466947c-13.358239 0-24.068162 10.804067-24.068162 24.283056 0 13.269211 10.709923 24.072255 24.068162 24.072255 108.073414-23.852244 84.23038 84.216054 84.23038 84.216054C774.488785 434.404738 785.382902 445.104427 798.776957 445.104427L798.776957 445.104427zM781.237489 157.733441c-52.015677-12.186554-105.519242 0.902556-120.508631 3.776-1.162476 0.109494-2.245134 2.498914-3.312442 2.713808-0.523933 0.104377-0.843204 1.287319-0.843204 1.287319-14.774495 4.180206-25.583678 18.183128-25.583678 34.349319 0 19.259646 15.618723 35.266202 35.092239 35.266202 0 0 18.945491-2.459005 31.783891-7.483438 12.729929-5.126764 120.484072-3.776 174.001963 86.095867 29.200042 65.589834 12.839423 109.510136 10.793834 116.563786 0 0-6.943133 17.054421-6.943133 33.82948 0 19.36914 15.622816 26.366508 34.970466 26.366508 16.176424 0 29.764907-7.167237 33.730219-34.732036l0.214894 0C1002.087433 262.817778 874.327654 179.451068 781.237489 157.733441L781.237489 157.733441zM781.237489 157.733441"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M334.792596 193.026672c-112.231356 50.208765-180.160861 168.347034-165.393577 289.43876 20.674197 191.974688 225.93944 308.636229 401.670116 230.369626l72.35969-32.488024 93.033887 93.033887c72.35969 72.35969 95.987344 88.603702 110.754628 73.836418 14.767284-14.767284-1.476728-38.394938-75.313147-112.231356l-93.033887-93.033887 31.011296-57.592406c33.964752-63.49932 41.348394-169.823762 14.767284-237.753267-54.63895-144.71938-245.136909-220.032527-389.856289-153.57975zm222.985984 44.301851c91.557159 41.348394 131.428825 107.801171 131.428825 215.602342 0 109.277899-41.348394 174.253948-137.335738 217.07907-91.557159 41.348394-178.684133 26.581111-255.474008-42.825123-126.99864-115.184813-101.894257-311.589686 50.208765-386.902833 76.789875-38.394938 132.905553-38.394938 211.172157-2.953457z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-notice" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M866.273 719.36c-1.11-1.53-111.75-155.31-111.75-268.95 0-4.902-0.076-9.745-0.212-14.542 0-0.009-0.001-0.018-0.001-0.027-1.791-62.898-15.28-116.588-40.197-159.731-0.939-1.627-2.014-3.127-3.191-4.507-28.177-45.82-67.265-74.717-108.919-90.231v-14.372c0-49.62-40.38-90-90-90-0.001 0-0.002 0-0.003 0-0.001 0-0.002 0-0.003 0-49.62 0-90 40.38-90 90v14.372c-41.654 15.514-80.742 44.409-108.919 90.231-1.177 1.38-2.251 2.88-3.191 4.507-24.917 43.145-38.407 96.833-40.197 159.731 0 0.009-0.001 0.018-0.001 0.027-0.136 4.796-0.212 9.639-0.212 14.542 0 113.64-110.64 267.42-111.75 268.95-3.835 5.287-5.812 11.655-5.719 18.105-0.002 2.237 0.238 4.485 0.744 6.705 1.92 8.43 7.44 15.63 15.060 19.71 5.31 2.85 100.665 53.363 218.883 78.774 20.075 62.236 69.209 104.346 125.302 104.346 0.001 0 0.002 0 0.003 0 0.001 0 0.002 0 0.003 0 56.093 0 105.227-42.11 125.303-104.346 118.218-25.412 213.574-75.924 218.883-78.774 7.62-4.080 13.14-11.28 15.060-19.71 0.505-2.219 0.746-4.467 0.744-6.704 0.093-6.45-1.885-12.818-5.72-18.106zM538.438 880.099c-0.042 0.023-0.085 0.048-0.127 0.071-0.349 0.187-0.7 0.362-1.051 0.542-0.247 0.126-0.49 0.258-0.738 0.38-0.158 0.078-0.318 0.15-0.476 0.226-7.62 3.688-15.723 5.682-24.046 5.682-8.323 0-16.426-1.994-24.045-5.682-0.158-0.077-0.319-0.148-0.477-0.226-0.247-0.123-0.491-0.254-0.738-0.38-0.351-0.179-0.702-0.355-1.051-0.542-0.043-0.023-0.085-0.048-0.127-0.071-8.618-4.64-16.553-11.481-23.418-20.076-1.556-1.95-3.060-3.986-4.501-6.112 17.998 1.89 36.176 3.089 54.354 3.089 0.001 0 0.002 0 0.003 0 0.001 0 0.002 0 0.003 0 18.178 0 36.356-1.2 54.354-3.089-1.441 2.127-2.945 4.162-4.501 6.112-6.864 8.595-14.799 15.436-23.418 20.076zM522.023 167h-20.045c-0.004 0-0.007 0-0.011 0-6.594 0-13.249 0.3-19.963 0.87v-0.87c0-16.529 13.469-29.999 29.997-30 16.529 0.001 29.997 13.471 29.997 30v0.87c-6.714-0.569-13.369-0.869-19.963-0.87-0.005 0-0.008 0-0.012 0zM445.316 235.851c1.11-0.218 2.219-0.492 3.322-0.841 14.339-4.573 29.66-7.205 45.593-7.849 0.486-0.019 0.971-0.038 1.459-0.053 0.687-0.023 1.375-0.041 2.064-0.056 1.403-0.029 2.811-0.052 4.229-0.052h20.035c1.418 0 2.826 0.022 4.229 0.052 0.689 0.015 1.377 0.034 2.064 0.056 0.487 0.015 0.972 0.036 1.459 0.053 15.934 0.644 31.253 3.276 45.593 7.849 1.103 0.349 2.212 0.623 3.322 0.841 73.513 24.897 115.833 101.225 115.833 214.559 0 101.077 68.063 220.195 103.076 274.826-53.818 24.614-171.433 71.609-285.042 71.761-0.184 0-0.368 0.004-0.551 0.004-0.184 0-0.367-0.004-0.551-0.004-113.61-0.151-231.224-47.147-285.043-71.761 35.013-54.63 103.076-173.75 103.076-274.826 0-113.333 42.321-189.661 115.833-214.559z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wechat" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M816.240189 583.92103c-24.158213 0-43.833321-20.086477-43.833321-45.01831 0-24.791639 19.676132-44.878117 43.833321-44.878117 24.159236 0 43.830251 20.086477 43.830251 44.878117C860.07044 563.834552 840.400448 583.92103 816.240189 583.92103M590.784344 583.92103c-24.163329 0-43.833321-20.086477-43.833321-45.01831 0-24.791639 19.671015-44.878117 43.833321-44.878117 24.15412 0 43.825135 20.086477 43.825135 44.878117C634.609479 563.834552 614.938464 583.92103 590.784344 583.92103M1017.538845 647.868457c0-145.438417-127.686101-264.520559-289.518906-274.78739-7.573489-0.419556-15.162328-0.710175-22.747073-0.710175-172.507936 0-312.281329 123.363655-312.281329 275.497565 0 22.941502 3.235694 45.158503 9.269108 66.38392 33.56956 120.100332 156.483984 209.128995 303.011198 209.128995 49.862641 0 96.915283-10.265808 138.632407-28.64234l70.097498 48.578392c0 0 18.688641 13.245675 16.865109-12.256138l-19.807115-76.064396C976.386586 804.568359 1017.538845 730.488153 1017.538845 647.868457M227.097228 338.03897c-24.173562 0-43.831274-20.074198-43.831274-44.86686 0-24.926716 19.658735-45.013193 43.831274-45.013193 24.293289 0 43.826158 20.086477 43.826158 45.013193C270.924409 317.963749 251.390517 338.03897 227.097228 338.03897M503.120772 248.158916c24.173562 0 43.830251 20.086477 43.830251 45.013193 0 24.792663-19.656689 44.86686-43.830251 44.86686-24.295336 0-43.831274-20.074198-43.831274-44.86686C459.288474 268.245394 478.825436 248.158916 503.120772 248.158916M705.273888 349.428368c6.734378 0 13.331633 0.295735 19.946284 0.586354-25.711592-154.00042-176.020946-272.244474-357.650633-272.244474-199.61327 0-361.448122 142.895501-361.448122 318.956356 0 98.156554 50.29243 185.900967 129.241526 244.450455l-26.698059 102.137215c0 0-9.121751 33.901111 25.434276 18.672268l99.596346-68.960605c41.438785 14.675234 86.532819 22.801309 133.874033 22.801309 4.072759 0 7.998161-0.290619 11.932774-0.290619-5.760191-21.801539-8.846482-44.447305-8.846482-67.664076C370.655831 483.343333 520.81783 349.428368 705.273888 349.428368"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-collect" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M695.984 103.984l-400.16 0c-53.008 0-96 42.992-96 96l0 288c0 1.04 0.128 2.048 0.16 3.088l0 423.184 297.904-133.328 294.096 133.328L791.984 487.984l0-64 0-224C791.984 146.976 748.992 103.984 695.984 103.984zM759.984 423.984l0 135.408 0 298.896-262.096-118.112-265.904 112.768L231.984 559.536l0-85.264 0-50.288 0-16 0-208c0-35.344 28.656-64 64-64l399.632 0c35.344 0 64 28.656 64 64l0 208 0.368 0L759.984 423.984z"  ></path>' +
    '' +
    '<path d="M589.68 596.8l-99.76-52.576-98.128 55.568 19.568-110.432-83.568-75.456 111.84-15.68 46.48-102.192 49.584 100.752 112.288 12.288-81.216 77.952L589.68 596.8z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-write" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M941.707762 174.60776l-82.235956-89.545432c0 0-71.27123-58.478879-138.88721 14.619976l-590.271668 593.926918L66.351174 923.868465l40.204677 40.204677 226.606041-74.92648 590.271668-603.064019C923.43356 286.082644 983.740064 240.396115 941.707762 174.60776zM305.848826 843.926762 177.988764 718.711945l511.096421-521.897418 127.861086 125.214816L305.848826 843.926762z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-like" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M284.60192 97.749278c89.236394 0 181.50075 55.125505 232.225015 175.895079 0.063445-0.157589 0.150426-0.275269 0.213871-0.428765l0 0.073678c0.064468 0.153496 0.147356 0.275269 0.210801 0.428765C566.91675 152.934135 657.290037 97.792257 744.667084 97.777931c121.066333-0.020466 236.417501 105.789395 230.071979 289.457508C963.876668 701.545984 522.391674 920.188656 517.039783 922.829809l0-0.24457c-5.465478-2.641153-456.280977-221.230614-467.370547-535.456225C43.189661 203.52844 160.989601 97.749278 284.60192 97.749278M284.60192 61.420885c-34.487465 0-68.147076 6.916527-100.040461 20.559245-32.239262 13.790074-61.178361 33.827433-86.014003 59.555397-28.384467 29.40368-50.16861 64.955384-64.745606 105.663528C18.445094 290.081725 11.5695 337.591785 13.362332 388.409171c2.775206 78.650291 30.761608 157.706835 83.179444 234.971569 40.844244 60.20315 96.649224 119.550817 165.865655 176.394453 107.145276 87.99103 213.652008 142.979412 235.090273 153.677055 0.12075 0.077771 0.2415 0.152473 0.363274 0.229221 5.851265 3.637854 12.506848 5.475711 19.181875 5.475711 5.490038 0 10.991332-1.242294 16.074094-3.750417 4.807493-2.372024 119.051443-59.201333 234.054687-155.665339 67.810409-56.880475 122.478496-116.259864 162.484651-176.491667 51.2922-77.222779 78.675874-156.206668 81.390705-234.759745 1.775436-51.370994-5.131881-99.334379-20.529569-142.559856-14.625092-41.056068-36.453237-76.794014-64.87966-106.22123-24.269753-25.12319-52.436256-44.687782-83.717703-58.144258-31.019481-13.345959-63.727417-20.114107-97.216135-20.11513-53.018517 0.00921-104.614639 17.170055-149.251256 49.628304-23.240307 16.899902-44.414559 37.835723-62.935378 62.228273-5.486968 7.225565-10.748808 14.767332-15.775288 22.606881-5.204535-7.966439-10.656711-15.627932-16.344247-22.962991-18.893302-24.364921-40.48404-45.270043-64.173578-62.136176C390.838499 78.499865 338.408383 61.420885 284.60192 61.420885L284.60192 61.420885z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fly" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M930.253384 66.145489C897.954771 81.857333 64.303027 485.154585 64.303027 485.154585s280.784988 169.240519 279.339056 167.603229c-0.463558-0.545422 167.603229 307.272245 167.603229 307.272245S951.204555 108.045785 958.187597 94.079702C964.298781 76.620052 951.204555 57.416687 930.253384 66.145489zM176.03783 485.154585l642.479727-307.273269L371.576295 596.889389C371.466802 596.780919 176.03783 485.154585 176.03783 485.154585zM511.245312 848.295256c0 0-87.375-168.31238-111.734804-223.471654l449.042109-425.173492L511.245312 848.295256z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)