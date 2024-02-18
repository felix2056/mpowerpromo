<div class="no-print w-100" categories="" componentid="64f8c584bedafd07266de58b" keyid="9891">
    <div title="navbar" class="container-max">
        <nav class="navbar navbar-light d-flex justify-content-between align-items-center py-2 px-0">
            <div class="col-6 col-lg-3 pl-0 align-items-center pr-0 d-flex">
                <a href="#" target="_self" class="d-lg-none d-inline-block" role="button">
                    <i class="far fa-bars fa-1x mr-3"></i>
                </a>

                <a href="/" class="navbar-brand nuxt-link-active">
                    <img alt="" class="logo" data-src="{{ $store->logo }}" src="{{ $store->logo }}" lazy="loaded">
                </a>
            </div>
            
            <div class="d-none d-lg-inline-block align-items-center col-lg-6"><a href="#" target="_self" class="d-lg-none d-inline-block" role="button"><i class="far fa-bars fa-1x mr-3"></i></a>
                <div class="">
                    <div class="d-flex">
                        <div class="flex-grow-1">
                            <div class="pb-3 pb-lg-0">
                                <div class="input-group"><input placeholder="Search..." aria-label="Search..." autocomplete="off" data-hj-allow="" class="form-control ">
                                    <div class="input-group-append"><span class="input-group-text"><i class="fas fa-search"></i>
                                            <!----></span></div>
                                </div>
                                <div class="shadow vbt-autocomplete-list bg-white p-3 border rounded" style="display: none;">
                                    <!----> <small class="text-muted">No
                                        search history</small></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!---->
            </div>
            <div class="col-6 px-0 col-lg-3 d-flex align-items-center justify-content-end">
                <!----> <span><a href="/favorites" class="ml-2" name="menu" alt="menu" target=""><i class="far fa-heart fa-1x"></i>

                    </a>
                    <!----></span><span>
                    <div class="dropdown b-dropdown align-top dropdown-icon btn-group ml-2" name="menu" alt="menu" id="__BVID__57">
                        <!----><button aria-haspopup="menu" aria-expanded="false" type="button" class="btn dropdown-toggle btn-link dropdown-toggle-no-caret" id="__BVID__57__BV_toggle_"><i class="far fa-shopping-cart fa-1x"></i>
                            <!----></button>
                        <ul role="menu" tabindex="-1" class="dropdown-menu dropdown-menu-right" aria-labelledby="__BVID__57__BV_toggle_">
                            <li role="presentation">
                                <header class="dropdown-header">Your Carts</header>
                            </li>
                            <div>
                                <li role="presentation"><a href="/cart" class="dropdown-item" role="menuitem" target="_self">Cart</a></li>
                            </div>
                            <div>
                                <li role="presentation"><a href="/quotecart" class="dropdown-item" role="menuitem" target="_self">Quote</a></li>
                            </div>
                            <div>
                                <li role="presentation"><a href="/proofcart" class="dropdown-item" role="menuitem" target="_self">Proof</a></li>
                            </div>
                            <div>
                                <li role="presentation"><a href="/samplecart" class="dropdown-item" role="menuitem" target="_self">Sample</a></li>
                            </div>
                            <div>
                                <li role="presentation"><a href="/boxcart" class="dropdown-item" role="menuitem" target="_self">Box</a></li>
                            </div>
                        </ul>
                    </div>
                    <!---->
                </span><span>
                    <div class="dropdown b-dropdown align-top dropdown-icon btn-group ml-2" name="" alt="" id="__BVID__74">
                        <!----><button aria-haspopup="menu" aria-expanded="false" type="button" class="btn dropdown-toggle btn-link dropdown-toggle-no-caret" id="__BVID__74__BV_toggle_"><i class="far fa-user-circle fa-1x"></i>

                            <!----></button>
                        <ul role="menu" tabindex="-1" class="dropdown-menu dropdown-menu-right" aria-labelledby="__BVID__74__BV_toggle_">
                            <li role="presentation"><a href="/account" class="dropdown-item" role="menuitem" target="_self">
                                    <!---->
                                    My Account
                                </a></li>
                            <li role="presentation"><a href="/signin" class="dropdown-item" role="menuitem" target="_self">
                                    <!---->
                                    Sign In
                                </a></li>
                        </ul>
                    </div>
                    <!---->
                </span><span>
                    <!---->
                    <!----></span>
            </div>
        </nav>

        <div>
            <div class="d-block d-lg-none">
                <div class="d-flex">
                    <div class="flex-grow-1">
                        <div class="pb-3 pb-lg-0">
                            <div class="input-group"><input placeholder="Search..." aria-label="Search..." autocomplete="off" data-hj-allow="" class="form-control ">
                                <div class="input-group-append"><span class="input-group-text"><i class="fas fa-search"></i>
                                        <!----></span></div>
                            </div>
                            <div class="shadow vbt-autocomplete-list bg-white p-3 border rounded" style="display: none;">
                                <!----> <small class="text-muted">No
                                    search history</small></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!---->
    </div>

    <div tabindex="-1" class="b-sidebar-outer">
        <!---->
        <div id="box-sidebar-right" tabindex="-1" role="dialog" aria-modal="true" aria-hidden="true" class="b-sidebar shadow b-sidebar-right bg-light text-dark" style="display: none;">
            <header class="b-sidebar-header border-bottom">
                <div class="d-flex justify-content-between align-items-center w-100">
                    <div class="h4 mb-0">Your Box</div> <a class="text-body"><i class="far fa-times"></i></a>
                </div>
            </header>
        </div>
        <!---->
        <div class="b-sidebar-backdrop bg-dark" style="display: none;"></div>
    </div>

    <div tabindex="-1" class="b-sidebar-outer">
        <!---->
        <div id="box-sidebar-right" tabindex="-1" role="dialog" aria-modal="true" aria-hidden="true" class="b-sidebar shadow b-sidebar-right bg-light text-dark" style="width: 400px; display: none;">
            <header class="b-sidebar-header border-bottom">
                <div class="d-flex justify-content-between align-items-center w-100">
                    <div class="h4 mb-0">Your Cart</div> <a class="text-body"><i class="far fa-times"></i></a>
                </div>
            </header>
        </div>
        <!---->
        <div class="b-sidebar-backdrop bg-dark" style="display: none;"></div>
    </div>
</div>

<div class="no-print w-100 flex-nowrap mx-auto py-3 px-0 d-none d-md-block overflow-x-auto" categories="" componentid="64f8c584bedafd07266de5d7" keyid="8969">
    <div class="justify-content-between container-max d-none d-md-flex align-items-center">
        <div class="mx-auto px-3 text-nowrap">
            <div class="megamenu-item text-nowrap mx-auto px-3">
                <a text="Products" href="/all-products" class=" megamenu-link">
                    <!---->
                    Products
                    <i class="far fa-chevron-down"></i>
                </a>
                <div class="megamenu-content border-top">
                    <div>
                        <section class="fdb-block">
                            @php
                                $navbar_categories = \App\Models\GoogleProductCategory::where('parent_id', null)->orderBy('name')->get()->chunk(6);
                            @endphp
                            
                            <div class="h3 mt-5 container">Promotional Products</div>
                            <div class="row container no-gutters mx-auto mb-5">
                                @foreach ($navbar_categories as $categories)
                                    <div class="col-sm-3">
                                        <ul class="nav flex-column">
                                            @foreach ($categories as $category)
                                                <li class="nav-item">
                                                    <a href="/cat/{{ $category->slug }}" class="nav-link pl-0">
                                                        {{ $category->name }}
                                                    </a>
                                                </li>
                                            @endforeach
                                        </ul>
                                    </div>
                                @endforeach
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <div class="mx-auto px-3 text-nowrap">
            <a href="/brands" class=" megamenu-link">
                <!---->
                Brands
            </a>
        </div>
        <div class="mx-auto px-3 text-nowrap">
            <a href="/suppliers" class=" megamenu-link">
                <!---->
                Suppliers
            </a>
        </div>
    </div>
</div>