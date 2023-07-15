<template>
  <div>
    <header class="x-header">
      <strong class="x-header_my-name">Кутров Николай</strong>
      <div class = "x-header_fun-jock">Диалог с клиентом банке:
        — Кредит оформлен на Вас?
        Нет, на холодильник.</div>
      <button class = "x-header_btn">Выход</button>
    </header>
  </div>
</template>

<script>
export default{
  name:"AppHeader"
}
</script>

<style scoped>
.x-header{
  padding:  10px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  background: #b7e7ff;
  align-items: center;

}
.x-header_btn{
  padding: 10px;
  border-radius: 8px;
  color: #b7e7ff;
  cursor: pointer;
  background: #6EAFF1;
}

</style>

