<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <Icon icon="address-book" alt="Test" class="fa-lg" />&nbsp;
                    <strong class="is-size-4">TASK LIST</strong>
                </a>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="field is-grouped">
                    <p class="control">
                        <button class="button" @click="onClickAdd">
                            <span class="icon">
                                <Icon icon="plus" />
                            </span>
                        </button>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props: {
        onClickAdd: Function,
    },
}
</script>


