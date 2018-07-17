<template>
    <div class="user">
        <div class="photo">
            <img :src="user.profile_picture"/>
        </div>
        <div class="info">
            <a data-toggle="collapse" @click="toggleMenu" href="javascript:void(0)">
           <span>
             {{ user.name }}
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
                            <a href="javascript:void(0)" @click="profileEdit">
                                <span class="sidebar-mini">Ep</span>
                                <span class="sidebar-normal">Edit Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" @click="logoutUser">
                                <span class="text-danger">
                                    <span class="sidebar-mini">L</span>
                                    <span class="sidebar-normal">Log Out</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </el-collapse-transition>
            </div>
        </div>
    </div>
</template>
<script>
    import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

    export default {
        components: {
            [CollapseTransition.name]: CollapseTransition
        },
        data() {
            //console.log(this.$store.getters);
            return {
                isClosed: true
            }
        },

        computed: {
            user() {
                return this.$store.getters.user;
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
            },
            profileEdit() {
                this.$router.push({name: 'EditProfile'});
            }
        },
        mounted() {
            this.$store.commit('setUser', this.$localStorage.get('user'));
        }
    }
</script>
<style>
    .collapsed {
        transition: opacity 1s;
    }
</style>
