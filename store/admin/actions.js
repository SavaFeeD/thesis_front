export default {
    async fetchUsers () {
        const { result } = await this.$axios.$get(`/users`)
        return result
    },

    async fetchUserProfile ({}, payload) {
        return await this.$axios.$get(`/v1/admin/user/${payload.id}/profile`)
    },

    async sendComment ({}, payload) {
        await this.$axios.$post('/user/profile/sendComment', payload)
    },

    async changeWhitelistStatus ({}, payload) {
        await this.$axios.$post('/user/changeStatus', payload)
    }
}
