<template>
    <div>
        <div class="wrapper wrapper-full-page">
            <div class="full-page login-page" data-color=""
                 data-image="static/img/background/background-2.jpg">
                <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
                <div class="content">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                                <form id="test" method="post" action="javascript:void(0)">
                                    <div class="card" data-background="color" data-color="blue">
                                        <div class="card-header">
                                            <h3 class="card-title">Login</h3>
                                        </div>
                                        <div class="card-content">
                                            <div class="form-group">
                                                <label>Email address</label>
                                                <input type="email" placeholder="Enter email"
                                                       class="form-control input-no-border">
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="password" placeholder="Password"
                                                       class="form-control input-no-border">
                                            </div>
                                        </div>
                                        <div class="card-footer text-center">
                                            <button type="submit" class="btn btn-fill btn-wd ">Let's go</button>
                                            <div class="forgot">
                                                <router-link to="/register">
                                                    Forgot your password?
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <footer class="footer footer-transparent">
                    <div class="container">
                        <div class="copyright">
                            &copy; {{ new Date().getFullYear() }}
                            <i class="fa fa-heart heart"></i> by
                            <a href="javascript:void(0)" target="_blank">Kawsar Ahmed</a>
                        </div>
                    </div>
                </footer>
                <div class="full-page-background"
                     style="background-image: url(static/img/background/background-2.jpg) "></div>
            </div>
        </div>
        <div class="collapse navbar-collapse off-canvas-sidebar">
            <ul class="nav nav-mobile-menu">
                <router-link to="/register" tag="li">
                    <a>Register</a>
                </router-link>
                <router-link to="/admin/overview" tag="li">
                    <a>Dashboard</a>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            toggleNavbar() {
                document.body.classList.toggle('nav-open')
            },
            closeMenu() {
                document.body.classList.remove('nav-open');
                document.body.classList.remove('off-canvas-sidebar')
            }
        },
        beforeDestroy() {
            this.closeMenu()
        }
    }
</script>
<style>
</style>
