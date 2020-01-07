<template>
  <div class="layout">
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider hide-trigger>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Header>Header</Header>
      <Layout>
        <Content>Content</Content>
        <Sider hide-trigger>Sider</Sider>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>

    <Layout>
      <Sider hide-trigger>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </div>
</template>
<style lang="less" src="@/style/components/layout.less"></style>

<script>
import Layout from "@/components/commom/layout";
export default {
  name: "Default",
  components: {
    Layout,
    Header: Layout.Header,
    Sider: Layout.Sider,
    Content: Layout.Content,
    Footer: Layout.Footer
  }
};
</script>
