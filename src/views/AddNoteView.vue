<template>
    <div class="add-note-box">
        <van-nav-bar left-arrow>
            <template #right>
                <van-icon name="success" size="18"></van-icon>
            </template>
        </van-nav-bar>
        <van-field class="filed" rows="1" autosize type="textarea" placeholder="请输入内容"></van-field>
    </div>
</template>

<style lang="scss" scoped>
.add-note-box {
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    flex: 1;
    background: #fff;

    .field {
        font-size: 0.22rem;
    }
}
</style>
