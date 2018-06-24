<template>
    <div class="user">
        <div class="photo">
            <img src="static/img/faces/face-2.jpg"/>
        </div>
        <div class="info">
            <a data-toggle="collapse" @click="toggleMenu" href="javascript:void(0)">
           <span>
             Chet Faker
             <b class="caret"></b>
          </span>
            </a>
            <div class="clearfix"></div>
            <div>
                <el-collapse-transition>
                    <ul class="nav" v-show="!isClosed">
                        <li>
                            <a href="javascript:void(0)" @click="profileView">
                                <span class="sidebar-mini">Mp</span>
                                <span class="sidebar-normal">My Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <span class="sidebar-mini">Ep</span>
                                <span class="sidebar-normal">Edit Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" @click="logoutUser">
                                <span class="sidebar-mini">O</span>
                                <span class="sidebar-normal">Logout</span>
                            </a>
                        </li>
                    </ul>
                </el-collapse-transition>
            </div>
        </div>
    </div>
</template>
<script>
    import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

    export default {
        components: {
            [CollapseTransition.name]: CollapseTransition
        },
        data() {
            return {
                isClosed: true
            }
        },
        methods: {
            toggleMenu() {
                this.isClosed = !this.isClosed
            },
            logoutUser() {
                this.$localStorage.clear();
                this.$router.push({name: 'Login'});
            },
            profileView() {
                this.$router.push({name: 'ShowProfile'})
            }
        }
    }
</script>
<style>
    .collapsed {
        transition: opacity 1s;
    }
</style>
