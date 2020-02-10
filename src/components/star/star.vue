<template>
  <div :class="['star', starSizeClass]">
    <span v-for="(star,index) in starTypeClasses" :class="star" :key="index"></span>
  </div>
</template>

<script>
export default {
    name: 'Star',
    props: ['size', 'score'],
    data() {
        return {

        }
    },
    computed:{
        starSizeClass() {
            return 'star-' + this.size
        },
        starTypeClasses() {
            let stars = []
            const integer = Math.trunc(this.score)
            const double = this.score - integer
            for (let index = 0; index < integer; index++) {
                stars.push('on')
            }
            if(integer == 5){
                return stars
            }
            if(double > 0){
                stars.push('half')
            }else{
                stars.push('off')
            }
            const left = 5 - integer - 1
            for (let index = 0; index < left; index++) {
                stars.push('off')
            }
            return stars
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixin.styl'
    .star
        display inline-block
        font-size 0
        &>span
            display inline-block
        &.star-24
            &>span
                width: 10px
                height: 10px
                margin-right: 3px
                background-size: 10px 10px
                &:last-child
                    margin-right: 0
            .on
                bg-image('star24_on')
            .half
                bg-image('star24_half')
            .off
                bg-image('star24_off')
        &.star-36
            &>span
                width: 15px
                height: 15px
                margin-right: 3px
                background-size: 15px 15px
                &:last-child
                    margin-right: 0
                &.on
                    bg-image('star36_on')
                &.half
                    bg-image('star36_half')
                &.off
                    bg-image('star36_off')
        &.star-48
            &>span
                width: 20px
                height: 20px
                margin-right: 3px
                background-size: 20px 20px
                &:last-child
                    margin-right: 0
            .on
                bg-image('star48_on')
            .half
                bg-image('star48_half')
            .off
                bg-image('star48_off')
</style>