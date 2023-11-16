export default function Car() {

    const message = `\n
    ========[[ Novex ]]======== 
    hola mary este es un mesaje de prueba \n para compra de productos desde la pagina \n\n

    ======[[ Novex app ]]======
    `

    const numero = 4264972551

    return (<div className="py-8 px-4 relative z-10">

        <div className="flex w-full justify-between border-b">
            <h3 className="text-white text-2xl font-bold">Compra</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M25.5 27C23.835 27 22.5 28.335 22.5 30C22.5 30.7957 22.8161 31.5587 23.3787 32.1213C23.9413 32.6839 24.7043 33 25.5 33C26.2956 33 27.0587 32.6839 27.6213 32.1213C28.1839 31.5587 28.5 30.7957 28.5 30C28.5 29.2044 28.1839 28.4413 27.6213 27.8787C27.0587 27.3161 26.2956 27 25.5 27ZM1.5 3V6H4.5L9.9 17.385L7.86 21.06C7.635 21.48 7.5 21.975 7.5 22.5C7.5 23.2957 7.81607 24.0587 8.37868 24.6213C8.94129 25.1839 9.70435 25.5 10.5 25.5H28.5V22.5H11.13C11.0305 22.5 10.9352 22.4605 10.8648 22.3902C10.7945 22.3198 10.755 22.2245 10.755 22.125C10.755 22.05 10.77 21.99 10.8 21.945L12.15 19.5H23.325C24.45 19.5 25.44 18.87 25.95 17.955L31.32 8.25C31.425 8.01 31.5 7.755 31.5 7.5C31.5 7.10218 31.342 6.72065 31.0607 6.43934C30.7794 6.15804 30.3978 6 30 6H7.815L6.405 3M10.5 27C8.835 27 7.5 28.335 7.5 30C7.5 30.7957 7.81607 31.5587 8.37868 32.1213C8.94129 32.6839 9.70435 33 10.5 33C11.2956 33 12.0587 32.6839 12.6213 32.1213C13.1839 31.5587 13.5 30.7957 13.5 30C13.5 29.2044 13.1839 28.4413 12.6213 27.8787C12.0587 27.3161 11.2956 27 10.5 27Z" fill="white" fill-opacity="0.75" />
            </svg>
        </div>


        <div className="mx-2 text-black ">

            <div className="my-4 p-2 grid grid-cols-3 bg-white bg-opacity-50 rounded-md  flex items-center">

                <img
                    src="/products/01.png" className=" rounded-md mix-blend-multiply " alt="" />

                <div className="col-span-2 px-2 flex flex-col gap-1 justify-between">
                    <h4 className="truncate text-sm">Nombre de Producto de Producto e Producte</h4>
                    <h4>Precio: 5$</h4>

                    <div className="flex w-full justify-between">


                        <div>4$</div>


                        <div className="flex items-end gap-2">

                            <div className=" relative flex
bg-primary rounded-full h-6 w-6 shadow-lg shadow-light">
                                <i className="absolute inset-0 grid place-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <g clip-path="url(#clip0_78_2112)">
                                            <path d="M1.41669 6H10.5834" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_78_2112">
                                                <rect width="11.4286" height="11.4286" fill="white" transform="translate(0.285706 0.285767)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </i>
                            </div>

                            <div className=" border w-8 border-primary rounded-md grid place-content-center">
                                5
                            </div>


                            <div className=" relative flex
bg-primary rounded-full h-6 w-6 shadow-lg shadow-light">
                                <i className="absolute inset-0 grid place-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <g clip-path="url(#clip0_78_2117)">
                                            <path d="M6.01966 1.41675L6.00788 10.5834M1.41669 6.00008H10.5834" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_78_2117">
                                                <rect width="11.4286" height="11.4286" fill="white" transform="translate(0.285706 0.285767)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </i>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

        </div>



        <div className="my-4 relative bg-white bg-opacity-50 rounded-md p-4">



            <div className="flex flex-col gap-1 text-black">

                <div className="w-full flex justify-between">
                    <div>Sub Total:</div>

                    <div className=" text-right">
                        <div>20$</div>
                        <div>2000bs</div>
                    </div>
                </div>

                <div className="w-full flex justify-between">
                    <div className=" text-left">
                        <div>5  </div>
                        <div>productos</div>
                    </div>

                    <a 
                    target="_blank"
                    href={`https://api.whatsapp.com/send/?phone=%2B58${numero}&text=${message}&type=phone_number&app_absent=0`}
                    className="flex items-center px-4 bg-primary rounded-full  shadow-lg shadow-light">

                        <div className="font-medium text-white">

                            Pagar
                        </div>


                        <i className="ml-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M8.1455 6.57252C8.31325 6.5771 8.49933 6.58627 8.67625 6.9786C8.79358 7.23985 8.99067 7.7211 9.152 8.11343C9.27758 8.41868 9.38025 8.66985 9.40592 8.72118C9.46458 8.83852 9.50125 8.97327 9.42425 9.13185L9.39858 9.18502C9.34604 9.30818 9.27494 9.42256 9.18775 9.52418C9.14344 9.57561 9.09975 9.62756 9.05667 9.68002C8.97875 9.77535 8.90083 9.86885 8.83483 9.93485C8.71658 10.0522 8.59467 10.1787 8.73033 10.4133C8.86692 10.648 9.34267 11.4198 10.0458 12.0423C10.5604 12.5056 11.1503 12.8776 11.7902 13.1423C11.8543 13.1698 11.9066 13.1927 11.946 13.2119C12.1816 13.3293 12.3218 13.3109 12.4575 13.1533C12.5941 12.9947 13.0469 12.4667 13.2064 12.232C13.3604 11.9973 13.5181 12.034 13.7362 12.1147C13.9544 12.1963 15.1149 12.7655 15.3505 12.8819L15.4816 12.9461C15.6457 13.024 15.7566 13.0781 15.8043 13.1569C15.8629 13.2568 15.8629 13.7253 15.6686 14.2771C15.4688 14.8271 14.5072 15.3551 14.0718 15.3954L13.948 15.4101C13.5483 15.4578 13.0423 15.5201 11.2383 14.8097C9.0145 13.9352 7.54692 11.7663 7.25083 11.3273C7.23503 11.3038 7.21883 11.2805 7.20225 11.2576L7.19675 11.2503C7.062 11.0697 6.23608 9.9651 6.23608 8.82477C6.23608 7.73393 6.77417 7.1656 7.01892 6.9071L7.062 6.86127C7.14122 6.77177 7.23802 6.69955 7.34636 6.64908C7.4547 6.59862 7.57227 6.57099 7.69175 6.56793C7.85033 6.56793 8.00983 6.56793 8.1455 6.57252Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00201 19.5534C1.98473 19.6156 1.98416 19.6812 2.00034 19.7436C2.01652 19.8061 2.04888 19.8631 2.09416 19.9091C2.13944 19.955 2.19604 19.9882 2.25824 20.0052C2.32044 20.0223 2.38604 20.0227 2.44842 20.0063L6.67151 18.9026C8.01138 19.6283 9.51104 20.0086 11.0348 20.009H11.0385C16.0673 20.009 20.1667 15.9326 20.1667 10.923C20.1699 9.72818 19.9353 8.54463 19.4768 7.44129C19.0182 6.33795 18.3447 5.33685 17.4955 4.49627C16.6479 3.64862 15.6411 2.97695 14.533 2.51994C13.4248 2.06292 12.2372 1.82959 11.0385 1.83336C6.00967 1.83336 1.91034 5.90886 1.91034 10.9184C1.91034 12.5125 2.33017 14.0782 3.12951 15.4596L2.00201 19.5534ZM4.45592 15.8244C4.50439 15.6485 4.51736 15.4647 4.49406 15.2837C4.47077 15.1027 4.41169 14.9282 4.32026 14.7703C3.64204 13.5999 3.28503 12.2711 3.28534 10.9184C3.28534 6.67427 6.76226 3.20836 11.0385 3.20836C13.1193 3.20836 15.0608 4.01227 16.5257 5.47069C17.2465 6.18353 17.8181 7.03279 18.2071 7.96891C18.5962 8.90504 18.7949 9.90928 18.7917 10.923C18.7917 15.1672 15.3148 18.634 11.0385 18.634H11.0339C9.73931 18.6334 8.46527 18.3101 7.32692 17.6935C7.0201 17.5274 6.66161 17.4842 6.32409 17.5725L3.79226 18.2334L4.45592 15.8244Z" fill="white" />
                            </svg>
                        </i>

                    </a>

                </div>


            </div>


        </div>


    </div>)
}