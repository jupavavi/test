<template>
    <div class="box" :class="{ late: late, completed: completed }">
        <article class="media">
            <div class="media-left">
                <figure class="image is-16by9 is-128">
                    <img :src=img alt="Image" v-if=img>
                    <Icon icon="user-circle" v-else class="placeholder-icon" />
                </figure>
            </div>
            <div class="media-content">
                <div class="content">
                    <h3>{{ title }}</h3>
                    <p>
                        <strong>{{ createdBy }}</strong>&nbsp;
                        <small>{{ relativeCreatedOn }}</small>
                        <br>
                        {{description}}
                    </p>
                    <p v-if=late>
                        <Icon icon="exclamation-triangle" class="has-text-danger"/>&nbsp;
                        <strong>This task is delayed {{ relativeDueDate }}</strong>
                    </p>
                </div>
                <nav class="level is-mobile" v-if=!completed>
                    <div class="level-left">
                        <button class="button is-info level-item" aria-label="reply">
                            <span class="icon is-small">
                                <Icon icon="check" aria-hidden="true"></Icon>
                            </span>&nbsp;
                            complete
                        </button>
                    </div>
                </nav>
            </div>
        </article>
    </div>
</template>
<script>
import { distanceInWordsToNow } from 'date-fns';

export default {
    props: {
        title: String,
        img: String,
        description: String,
        completed: Boolean,
        createdOn: Date,
        createdBy: String,
        dueDate: Date,
    },
    computed: {
        relativeCreatedOn() {
            return distanceInWordsToNow(this.createdOn);
        },
        relativeDueDate() {
            return distanceInWordsToNow(this.dueDate);
        },
        late() {
            return this.dueDate < Date.now();
        }
    },
};
</script>
<style lang="scss" scoped>
    @import '~bulma';

    .is-128 {
        width: 128px;
    }
    .placeholder-icon {
        width: 100%;
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .completed {
        background-color: rgba($success, 0.25);
    }
    .late {
        background-color: rgba($danger, 0.25);
    }
</style>
