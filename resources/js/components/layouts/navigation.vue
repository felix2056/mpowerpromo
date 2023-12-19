<template>
    <nav class="navbar navbar-light d-flex justify-content-between align-items-center py-2 px-0">
        <div class="col-6 col-lg-3 pl-0 align-items-center pr-0 d-flex">
            <a href="#" target="_self" class="d-lg-none d-inline-block">
                <i class="far fa-bars fa-1x mr-3"></i>
            </a>
            <a href="index.html" aria-current="page" class="navbar-brand nuxt-link-exact-active nuxt-link-active">
                <img
                    src="https://store-media.mpowerpromo.com/5e4ef2d67141a025da688296/assets/mpower_log_text-1608679944014.png"
                    alt="" class="logo">
            </a>
        </div>

        <div class="d-none d-lg-inline-block align-items-center col-lg-6">
            <a href="#" target="_self" class="d-lg-none d-inline-block">
                <i class="far fa-bars fa-1x mr-3"></i>
            </a>

            <ul class="nav d-flex justify-content-center align-items-center">
                <span>
                    <a href="demorequest.html" target="" class="nav-link d-lg-none btn btn-primary btn-block mb-3">
                        Request Demo
                    </a>
                </span>
                <span>
                    <a href="https://app.thesqueegeeshop.com" target=""
                        class="nav-link d-lg-none btn btn-outline-primary btn-block mb-3">
                        Sign In
                    </a>
                </span>
                <span>
                    <div>
                        <div class="dropdown b-dropdown position-static btn-group">
                            <button aria-haspopup="menu" aria-expanded="false" type="button" class="btn dropdown-toggle btn-link dropdown-toggle-no-caret">
                                <router-link to="/solutions">
                                    Solutions
                                </router-link> 
                                <i class="far fa-angle-down"></i>
                            </button>
                            
                            <ul role="menu" tabindex="-1" class="dropdown-menu mt-0">
                                <router-link to="/application" class="dropdown-item">
                                    Order Mangement
                                </router-link>
                                <router-link to="/stores" class="dropdown-item">
                                    Stores
                                </router-link>
                                <router-link to="/ads" class="dropdown-item">
                                    Product ads
                                </router-link>
                            </ul>
                        </div>
                    </div>
                </span>
                
                <span>
                    <div>
                        <div class="dropdown b-dropdown position-static btn-group">
                            <button aria-haspopup="menu" aria-expanded="false" type="button" class="btn dropdown-toggle btn-link dropdown-toggle-no-caret">
                                <router-link to="/application">
                                    Application
                                </router-link>
                                <i class="far fa-angle-down"></i>
                            </button>
                            
                            <ul role="menu" tabindex="-1" class="dropdown-menu mt-0"> 
                                <router-link to="/application" class="dropdown-item">
                                    Application
                                </router-link>
                                <router-link to="/integrations" class="dropdown-item">
                                    Integrations
                                </router-link>
                            </ul>
                        </div>
                    </div>

                </span><span>
                    <div>
                        <div class="dropdown b-dropdown position-static btn-group">
                            <button aria-haspopup="menu" aria-expanded="false" type="button" class="btn dropdown-toggle btn-link dropdown-toggle-no-caret">
                                <router-link to="/stores">
                                    Stores
                                </router-link>
                                <i class="far fa-angle-down"></i>
                            </button>
                            
                            <ul role="menu" tabindex="-1" class="dropdown-menu mt-0">
                                <router-link to="/stores" class="dropdown-item">
                                    Stores
                                </router-link>
                                <router-link to="/pod" class="dropdown-item">
                                    Print on Demand
                                </router-link>
                                <router-link to="/storeexamples" class="dropdown-item">
                                    Store Examples
                                </router-link>
                            </ul>
                        </div>
                    </div>
                </span>
                
                <span>
                    <li class="nav-item">
                        <router-link to="/pricing" class="nav-link">
                            Pricing
                        </router-link>
                    </li>
                </span>
            </ul>
        </div>
        <div class="col-6 px-0 col-lg-3 d-flex align-items-center justify-content-end">
            <span><a href="https://app.thesqueegeeshop.com" target="_blank" name="link" alt="link"
                    class="btn btn-link d-none d-sm-inline-block">

                    Sign In
                </a>
            </span><span><a href="contact.html" name="menu" alt="menu" target="_blank" class="btn btn-primary">

                    Request Demo
                </a>
            </span>
        </div>
    </nav>
</template>