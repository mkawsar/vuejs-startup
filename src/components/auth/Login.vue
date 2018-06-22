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
                                <form method="post" action="javascript:void(0)">
                                    <div class="card" data-background="color" data-color="blue">
                                        <div class="card-header">
                                            <h3 class="card-title">Login</h3>
                                        </div>
                                        <div class="card-content">
                                            <div class="form-group">
                                                <label>Email address</label>
                                                <input type="email" placeholder="Enter email"
                                                       class="form-control input-no-border" v-model="user.email">
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="password" placeholder="Password"
                                                       class="form-control input-no-border" v-model="user.password">
                                            </div>
                                        </div>
                                        <div class="card-footer text-center">
                                            <button class="btn btn-fill btn-wd" @click.prevent="login">
                                                Let's go
                                            </button>
                                            <div class="forgot">
                                                <!--<router-link class="" to="/register">Register a new account!</router-link>-->
                                            </div>
                                            <div class="forgot">
                                                <!--<a href="javascript:void(0)">Forgot your password?</a>-->
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
        data: function () {
            return {
                user: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            login: function () {
                axios.post(this.$env.BACKEND_API + '/api/v1/user/web-login', this.user)
                    .then((response) => {
                        //console.log(response);
                        Object.keys(response.data).forEach((key) => {
                            this.$localStorage.set(key, response.data[key]);
                            if (key === 'user') {
                                let roles = response.data[key].roles;
                                let userRoles = [];
                                roles.forEach(function (role) {
                                    userRoles.push(role.name);
                                });
                                this.$localStorage.set('roles', userRoles);
                            }
                        });
                        this.redirectToHome();
                    })
                    .catch((error) => {
                        this.$notification.notifyError(this, error.response.data);
                    });
            },
            redirectToHome: function () {
                if (this.$auth.hasRole('SysAdmin')) {
                    this.$router.push('dashboard');
                } else if (this.$auth.hasRole('Sales')) {
                    this.$router.push('dashboard');
                }else if (this.$auth.hasRole('SalesManager')) {
                    this.$router.push('dashboard');
                }
            }
        }
    }
</script>
<style scoped>
    .title-login-div {
        margin: 25px 0;
        font-size: 25px;
        color: #fff !important;
        font-weight: 600;
    }
    .title-login{
        color: #fff;
    }
    .forgot{
        margin-top: 10px;
    }
</style>
