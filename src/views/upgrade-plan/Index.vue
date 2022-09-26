<template>
    <div class="upgrade-plan-page-wrapper">
        <header class="py-3 py-md-4">
            <div class="container">
                <div class="d-flex align-items-center justify-content-between">
                    <router-link to="/">
                        <img
                            width="40"
                            height="40"
                            :src="require(`@/assets/images/logo.png`)"
                            class="img-fluid"
                            alt="Logo"
                        />
                    </router-link>
                    <div>
                        <router-link to="/register" class="btn btn-link text-decoration-none px-4">Register</router-link>
                        <router-link to="/" class="btn btn-primary px-4">Login</router-link>
                    </div>
                </div>
            </div>
        </header>
        <main class="py-3 py-md-5">
            <div class="container">
                <h4 class="mb-5 text-primary text-center">Subscription Plan</h4>
                <div class="mb-4 toggle-pricing-button">
                    <label class="form-check-label me-3" for="flexSwitchCheckChecked">Monthly</label>
                    <div class="form-check form-switch text-center mb-0">
                        <input
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckChecked"
                            checked>
                    </div>
                    <label class="form-check-label ms-3" for="flexSwitchCheckChecked">Annually</label>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-10 col-xl-9">
                        <div class="row justify-content-center">
                            <div class="col-sm-6 col-md-4 mb-3">
                                <div class="pricing-table">
                                    <div>
                                        <div class="pricing-table-icon basic">
                                            <i class="feather-layers"/>
                                        </div>
                                        <h4 class="mb-3">$49<small class="text-secondary fs-6">/Month</small></h4>
                                        <h4 class="mb-0">Basic</h4>
                                        <small class="text-secondary">Perfect plan for starters</small>
                                        <ul class="pricing-table-list mt-3">
                                            <li>One Project</li>
                                            <li>Share it with 5 team members</li>
                                            <li>Sync across device</li>
                                        </ul>
                                    </div>
                                    <a href="#" class="btn btn-outline-primary rounded-pill w-100">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 mb-3">
                                <div class="pricing-table">
                                    <div>
                                        <div class="pricing-table-icon standard">
                                            <i class="feather-folder-plus"/>
                                        </div>
                                        <h4 class="mb-3">$99<small class="text-secondary fs-6">/Month</small></h4>
                                        <h4 class="mb-0">Standard</h4>
                                        <small class="text-secondary">For users who want to do more</small>
                                        <ul class="pricing-table-list mt-3">
                                            <li>One Project</li>
                                            <li>Share it with 5 team members</li>
                                            <li>Sync across device</li>
                                            <li>Components included</li>
                                            <li>30 day version history</li>
                                        </ul>
                                    </div>
                                    <a href="#" class="btn btn-outline-primary rounded-pill w-100">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 mb-3">
                                <div class="pricing-table">
                                    <div>
                                        <div class="pricing-table-icon premium">
                                            <i class="feather-gitlab"/>
                                        </div>
                                        <h4 class="mb-3">$149<small class="text-secondary fs-6">/Month</small></h4>
                                        <h4 class="mb-0">Premium</h4>
                                        <small class="text-secondary">Advance features fro pros</small>
                                        <ul class="pricing-table-list mt-3">
                                            <li>One Project</li>
                                            <li>Share it with 5 team members</li>
                                            <li>Sync across device</li>
                                            <li>300+ Components included</li>
                                            <li>30 day version history</li>
                                        </ul>
                                    </div>
                                    <a href="#" class="btn btn-outline-primary rounded-pill w-100">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'Index'
    }
</script>