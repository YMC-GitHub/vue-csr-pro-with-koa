<template>
  <Row 
type="flex" justify="space-between" 
class="code-row-bg">
    <!--eslint-disable-->
    <Col span="4">col-4</Col>
    <Col span="4">col-4</Col>
    <Col span="4">col-4</Col>
    <Col span="4">col-4</Col>
  </Row>
</template>
<style lang="less" src="@/style/components/grid.less"></style>

<script>
import { Row, Col } from "@/components/commom/grid";
export default {
  name: "Grid",
  components: {
    Row,
    Col
  }
};
</script>
