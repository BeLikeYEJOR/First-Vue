<script setup lang="ts">
import Card from '@/components/Card.vue';

</script>

<template>
  <h1>About</h1>
  <p>
    The Page Is All About <span style="color: coral">YEGOR</span> and
    <span style="color: brown">John</span>
  </p>
  <div class="card-holder">
    <Card>
    Jelly dessert biscuit pie chocolate bar jelly beans. Ice cream jujubes shortbread cookie muffin candy caramels. Cheesecake sugar plum muffin ice cream candy cake chocolate cake. Liquorice bonbon oat cake marzipan gingerbread candy apple pie wafer cheesecake. Cake topping tiramisu pastry liquorice biscuit. Jelly jujubes chocolate cake caramels dragée toffee powder. Cheesecake candy canes cupcake candy canes pastry bonbon. Soufflé toffee fruitcake toffee jelly beans. Cheesecake sesame snaps gingerbread dragée sesame snaps carrot cake. Lemon drops halvah fruitcake cheesecake pastry. Tart pie croissant tiramisu apple pie. Chocolate cake fruitcake carrot cake pie tart sweet roll pastry cupcake candy. Tootsie roll wafer tootsie roll powder candy canes cotton candy.
  </Card>
  <Card>
    <template #title>My Awesome Title</template>
    Lollipop jujubes liquorice sweet apple pie cupcake. Jelly-o shortbread chocolate cake chocolate icing. Marshmallow fruitcake tiramisu jujubes bonbon sweet gingerbread. Cake ice cream jujubes lollipop carrot cake chupa chups. Sugar plum icing sesame snaps gummies cookie dragée chocolate bar sugar plum. Icing pudding dessert pudding powder. Muffin ice cream ice cream topping oat cake caramels chocolate caramels. Sugar plum halvah marzipan cheesecake topping. Ice cream dragée cake cotton candy sweet roll lemon drops candy canes shortbread tiramisu. Liquorice donut powder jujubes gingerbread cake oat cake ice cream. Sweet cupcake sweet liquorice jelly sesame snaps. Candy powder brownie sweet tootsie roll. Toffee croissant croissant gingerbread marzipan fruitcake cheesecake pudding chocolate bar. Liquorice donut gingerbread jujubes pastry jujubes sweet.
  </Card>
  </div>
</template>

<style lang="css" scoped>
.card-holder {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>