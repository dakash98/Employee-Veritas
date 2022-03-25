<template>
  <div class="content">
    <base-card class="card one"></base-card>
    <base-card class="card two"></base-card>
    <base-card class="card three"></base-card>
    <base-card class="card four"></base-card>
    <base-card class="card five"></base-card>
  </div>
</template>

<style scoped>
.content {
  margin-left: 4rem;
  display: grid;
  height: fit-content;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  grid-column-gap: 2rem;
  grid-template-areas:
    "one two three three"
    "four four five five";
}

.one,
.two,
.three {
  width: 13rem;
  height: 6.5rem;
}
.card{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.three {
  width: 28rem;
}

.four,
.five {
  width: 28rem;
  height: 18rem;
}

.one {
  grid-area: one;
}
.two {
  grid-area: two;
}
.three {
  grid-area: three;
}

.four {
  grid-area: four;
}
.five {
  grid-area: five;
}
</style>
