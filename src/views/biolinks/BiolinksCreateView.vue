<template>
    <layout>
        <div class="create-biolink-page-wrapper">
            <div class="biolink-setting">
                <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active"
                                id="content-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#content"
                                type="button"
                                role="tab"
                                aria-controls="content"
                                aria-selected="true">
                            Content
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link"
                                id="appearance-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#appearance"
                                type="button"
                                role="tab"
                                aria-controls="appearance"
                                aria-selected="false">
                            Appearance
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link"
                                id="settings-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#settings"
                                type="button"
                                role="tab"
                                aria-controls="settings"
                                aria-selected="false">
                            Settings
                        </button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active"
                         id="content"
                         role="tabpanel"
                         aria-labelledby="content-tab">
                        <div class="d-flex align-items-center justify-content-end mb-4">
                            <button type="button"
                                    class="btn btn-primary text-white me-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#addNewLinkModal">
                                <i class="feather-plus me-1"/> Add New Link
                            </button>
                            <button type="button"
                                    class="btn btn-primary text-white"
                                    data-bs-toggle="modal"
                                    data-bs-target="#widgetModal"
                                    title="Add widget">
                                <i class="feather-grid"/>
                            </button>
                        </div>
                        <div>
                            <draggable
                                class="draggable-wrapper"
                                tag="div"
                                :component-data="{
                              type: 'transition-group',
                              name: !drag ? 'flip-list' : null
                            }"
                                v-model="contentWidgetList"
                                v-bind="dragOptions"
                                @start="drag = true"
                                @end="drag = false"
                                item-key="order"
                            >
                                <template #item="{ element, index }">
                                    <div class="draggable-wrapper-item">
                                        <div class="draggable-wrapper-item-content">
                                            <div class="drag-icon">
                                                <DragIcon/>
                                            </div>
                                            <div class="drag-content">
                                                <div class="flex-grow-1">
                                                    <p>{{ element.type }}</p>
                                                    <div v-if="element.type === 'Image'">
                                                        <img
                                                            v-if="element.content.src"
                                                            width="45"
                                                            height="45"
                                                            :src="element.content.src"
                                                            class="rounded-circle"
                                                            alt="Image"
                                                        />
                                                    </div>
                                                    <div v-if="element.type === 'Text'">
                                                        <h6 v-if="element.content.title">
                                                            {{ element.content.title }}
                                                        </h6>
                                                        <p v-if="element.content.description" class="mb-0 text-muted">
                                                            {{ element.content.description }}
                                                        </p>
                                                    </div>
                                                    <div v-if="element.type === 'Social links'" class="w-100">
                                                        <ul v-if="element.content.links" class="list-unstyled d-flex">
                                                            <li class="flex-shrink-0 me-1"
                                                                v-for="(link, socialIndex) in element.content.links"
                                                                :key="`link-${socialIndex}`">
                                                                <a :href="link.url"
                                                                   class="d-inline-block">
                                                                    <img width="30" height="30"
                                                                         v-if="link.type === 'Email'"
                                                                         :src="require(`@/assets/images/icons/social/mail.png`)"
                                                                         alt="Email icon">
                                                                    <img width="30" height="30"
                                                                         v-if="link.type === 'Facebook'"
                                                                         :src="require(`@/assets/images/icons/social/facebook.png`)"
                                                                         alt="Facebook icon">
                                                                    <img width="30" height="30"
                                                                         v-if="link.type === 'Twitter'"
                                                                         :src="require(`@/assets/images/icons/social/twitter.png`)"
                                                                         alt="Twitter icon">
                                                                    <img width="30" height="30"
                                                                         v-if="link.type === 'Instagram'"
                                                                         :src="require(`@/assets/images/icons/social/instagram.png`)"
                                                                         alt="Instagram icon">
                                                                    <img width="30" height="30"
                                                                         v-if="link.type === 'TikTok'"
                                                                         :src="require(`@/assets/images/icons/social/tiktok.png`)"
                                                                         alt="TikTok icon">
                                                                    <img width="30" height="30"
                                                                         v-if="link.type === 'Youtube'"
                                                                         :src="require(`@/assets/images/icons/social/youtube.png`)"
                                                                         alt="Youtube icon">
                                                                    <img width="30" height="30"
                                                                         v-if="link.type === 'SoundCloud'"
                                                                         :src="require(`@/assets/images/icons/social/soundcloud.png`)"
                                                                         alt="SoundCloud icon">
                                                                    <img width="30" height="30"
                                                                         v-if="link.type === 'Basecamp'"
                                                                         :src="require(`@/assets/images/icons/social/basecamp.png`)"
                                                                         alt="Basecamp icon">
                                                                    <img width="30" height="30"
                                                                         v-if="link.type === 'Linkedin'"
                                                                         :src="require(`@/assets/images/icons/social/linkedin.png`)"
                                                                         alt="Linkedin icon">
                                                                    <img width="30" height="30"
                                                                         v-if="link.type === 'WhatsApp'"
                                                                         :src="require(`@/assets/images/icons/social/whatsapp.png`)"
                                                                         alt="WhatsApp icon">
                                                                    <img width="30" height="30"
                                                                         v-if="link.type === 'Telegram'"
                                                                         :src="require(`@/assets/images/icons/social/telegram.png`)"
                                                                         alt="Telegram icon">
                                                                    <img width="30" height="30"
                                                                         v-if="link.type === 'Twitch'"
                                                                         :src="require(`@/assets/images/icons/social/twitch.png`)"
                                                                         alt="Twitch icon">
                                                                    <img width="30" height="30"
                                                                         v-if="link.type === 'Patreon'"
                                                                         :src="require(`@/assets/images/icons/social/patreon.png`)"
                                                                         alt="Patreon icon">
                                                                    <img width="30" height="30"
                                                                         v-if="link.type === 'Pinterest'"
                                                                         :src="require(`@/assets/images/icons/social/pinterest.png`)"
                                                                         alt="Pinterest icon">
                                                                    <img width="30" height="30"
                                                                         v-if="link.type === 'Spotify'"
                                                                         :src="require(`@/assets/images/icons/social/spotify.png`)"
                                                                         alt="Spotify icon">
                                                                    <img width="30" height="30"
                                                                         v-if="link.type === 'Amazon'"
                                                                         :src="require(`@/assets/images/icons/social/amazon-pay.png`)"
                                                                         alt="Amazon icon">
                                                                    <img width="30" height="30"
                                                                         v-if="link.type === 'Snapchat'"
                                                                         :src="require(`@/assets/images/icons/social/snapchat.png`)"
                                                                         alt="Snapchat icon">
                                                                    <img width="30" height="30"
                                                                         v-if="link.type === 'Apple music'"
                                                                         :src="require(`@/assets/images/icons/social/music.png`)"
                                                                         alt="Apple music icon">
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div v-if="element.type === 'Link'" class="w-100">
                                                        <h6 v-if="element.content.title">
                                                            {{ element.content.title }}
                                                        </h6>
                                                        <p v-if="element.content.newLink" class="mb-0 text-muted">
                                                            {{ element.content.newLink }}
                                                        </p>
                                                    </div>
                                                    <div v-if="element.type === 'Youtube video'" class="w-100">
                                                        <h6 v-if="element.content.title">
                                                            {{ element.content.title }}
                                                        </h6>
                                                        <a v-if="element.content.url"
                                                           :href="element.content.url"
                                                           target="_blank"
                                                           class="d-flex align-items-center">
                                                            <img width="25"
                                                                 :src="require(`@/assets/images/icons/youtube.png`)"
                                                                 class="flex-shrink-0 img-fluid me-2"
                                                                 alt="Youtube icon">
                                                            {{ element.content.url }}
                                                        </a>
                                                    </div>
                                                    <div v-if="element.type === 'Soundcloud video'" class="w-100">
                                                        <h6 v-if="element.content.title">
                                                            {{ element.content.title }}
                                                        </h6>
                                                        <a v-if="element.content.url"
                                                           :href="element.content.url"
                                                           target="_blank"
                                                           class="d-flex align-items-center">
                                                            <img width="25"
                                                                 :src="require(`@/assets/images/icons/soundcloud.png`)"
                                                                 class="flex-shrink-0 img-fluid me-2"
                                                                 alt="Soundcloud icon">
                                                            {{ element.content.url }}
                                                        </a>
                                                    </div>
                                                    <div v-if="element.type === 'Vimeo video'" class="w-100">
                                                        <h6 v-if="element.content.title">
                                                            {{ element.content.title }}
                                                        </h6>
                                                        <a v-if="element.content.url"
                                                           :href="element.content.url"
                                                           target="_blank"
                                                           class="d-flex align-items-center">
                                                            <img width="25"
                                                                 :src="require(`@/assets/images/icons/vimeo.png`)"
                                                                 class="flex-shrink-0 img-fluid me-2"
                                                                 alt="Vimeo icon">
                                                            {{ element.content.url }}
                                                        </a>
                                                    </div>
                                                    <div v-if="element.type === 'Spotify embed'" class="w-100">
                                                        <h6 v-if="element.content.title">
                                                            {{ element.content.title }}
                                                        </h6>
                                                        <a v-if="element.content.url"
                                                           :href="element.content.url"
                                                           target="_blank"
                                                           class="d-flex align-items-center">
                                                            <img width="25"
                                                                 :src="require(`@/assets/images/icons/spotify.png`)"
                                                                 class="flex-shrink-0 img-fluid me-2"
                                                                 alt="Spotify icon">
                                                            {{ element.content.url }}
                                                        </a>
                                                    </div>
                                                    <div v-if="element.type === 'Twitch embed'" class="w-100">
                                                        <h6 v-if="element.content.title">
                                                            {{ element.content.title }}
                                                        </h6>
                                                        <a v-if="element.content.url"
                                                           :href="element.content.url"
                                                           target="_blank"
                                                           class="d-flex align-items-center">
                                                            <img width="25"
                                                                 :src="require(`@/assets/images/icons/twitch.png`)"
                                                                 class="flex-shrink-0 img-fluid me-2"
                                                                 alt="Twitch icon">
                                                            {{ element.content.url }}
                                                        </a>
                                                    </div>
                                                    <div v-if="element.type === 'TikTok embed'" class="w-100">
                                                        <h6 v-if="element.content.title">
                                                            {{ element.content.title }}
                                                        </h6>
                                                        <a v-if="element.content.url"
                                                           :href="element.content.url"
                                                           target="_blank"
                                                           class="d-flex align-items-center">
                                                            <img width="25"
                                                                 :src="require(`@/assets/images/icons/tik-tok.png`)"
                                                                 class="flex-shrink-0 img-fluid me-2"
                                                                 alt="TikTok icon">
                                                            {{ element.content.url }}
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="d-flex flex-column align-items-end justify-content-between">
                                                    <div class="form-check form-switch">
                                                        <input
                                                            class="form-check-input"
                                                            type="checkbox"
                                                            role="switch"
                                                            :id="`status-${element.order}`"
                                                            v-model="element.status"
                                                        />
                                                        <label class="form-check-label"
                                                               :for="`status-${element.order}`"/>
                                                    </div>
                                                    <div class="d-flex align-items-end justify-content-between">
                                                        <button type="button"
                                                                class="btn-icon btn-icon-transparent"
                                                                @click="openWidgetModal(element.type)">
                                                            <i class="feather-edit"/>
                                                        </button>
                                                        <button type="button"
                                                                class="btn-icon btn-icon-transparent"
                                                                @click="removeWidget(index)">
                                                            <i class="feather-trash"/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>
                    <div class="tab-pane fade"
                         id="appearance"
                         role="tabpanel"
                         aria-labelledby="appearance-tab">
                        <h5>Custom Appearance</h5>
                        <p>
                            Fully customize your Biolink. Change background color or select gradients and images. Choose
                            button
                            style, text color, typeface and more.
                        </p>
                        <button type="button" class="btn btn-primary mb-5">
                            Save Changes
                        </button>
                        <div class="mb-5">
                            <h6>Background</h6>
                            <div class="card">
                                <div class="card-body">
                                    <div class="row g-2">
                                        <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3">
                                            <ImageUploader
                                                class="w-100 height-200"
                                                @getFile="getCustomBackground"
                                            />
                                        </div>
                                        <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3">
                                            <div class="w-100 height-200 border rounded"
                                                 @click="setBackground('color')">
                                                <input
                                                    id="bgColorPicker"
                                                    class="position-absolute invisible"
                                                    type="color"
                                                    v-model="appearanceList.background.color.value"
                                                />
                                                <label
                                                    for="bgColorPicker"
                                                    class="w-100 h-100 rounded background-card"
                                                    :style="`background-color: ${appearanceList.background.color.value}`"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3"
                                             v-for="(bg, bgIndex) in backgroundImageList"
                                             :key="`bg-${bgIndex}`">
                                            <div
                                                class="w-100 height-200 border rounded background-card"
                                                :style="`background-image: url(${bg.src})`"
                                                @click="setBackground('image', bg.src)"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <h6>Fonts</h6>
                            <div class="card">
                                <div class="card-body">
                                    <div class="fonts-container">
                                        <div class="row g-2">
                                            <div class="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-3 mb-3"
                                                 v-for="(font, fontIndex) in googleFontList.items"
                                                 :key="`google-font-${fontIndex}`">
                                                <div class="text-center"
                                                     :style="`font-family: ${font.family}; font-size: 60px;`">
                                                    <div
                                                        class="w-100 height-150 d-flex align-items-center justify-content-center mb-2 border rounded font-card"
                                                        @click="setFont(font.family)">
                                                        Tt
                                                    </div>
                                                    <p class="mb-0" :style="`font-family: ${font.family};`">
                                                        {{ font.family }}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-4">
                            <h6>Buttons</h6>
                            <div class="card">
                                <div class="card-body">
                                    <div class="mb-3">
                                        <p class="text-body-3">Raised</p>
                                        <div class="row">
                                            <div class="col-md-4">
                                                <button type="button"
                                                        class="w-100 btn btn-primary shadow rounded-0"
                                                        @click="setButtonStyle('btn btn-primary shadow rounded-0')">
                                                    Square
                                                </button>
                                            </div>
                                            <div class="col-md-4">
                                                <button type="button"
                                                        class="w-100 btn btn-primary shadow"
                                                        @click="setButtonStyle('btn btn-primary shadow')">
                                                    Rounded
                                                </button>
                                            </div>
                                            <div class="col-md-4">
                                                <button type="button"
                                                        class="w-100 btn btn-primary shadow rounded-pill"
                                                        @click="setButtonStyle('btn btn-primary shadow rounded-pill')">
                                                    Pill
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <p class="text-body-3">Flat</p>
                                        <div class="row">
                                            <div class="col-md-4">
                                                <button type="button"
                                                        class="w-100 btn btn-primary rounded-0"
                                                        @click="setButtonStyle('btn btn-primary rounded-0')">
                                                    Square
                                                </button>
                                            </div>
                                            <div class="col-md-4">
                                                <button type="button"
                                                        class="w-100 btn btn-primary"
                                                        @click="setButtonStyle('btn btn-primary')">
                                                    Rounded
                                                </button>
                                            </div>
                                            <div class="col-md-4">
                                                <button type="button"
                                                        class="w-100 btn btn-primary rounded-pill"
                                                        @click="setButtonStyle('btn btn-primary rounded-pill')">
                                                    Pill
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <p class="text-body-3">Outline</p>
                                        <div class="row">
                                            <div class="col-md-4">
                                                <button type="button"
                                                        class="w-100 btn btn-outline-primary rounded-0"
                                                        @click="setButtonStyle('btn btn-outline-primary rounded-0')">
                                                    Square
                                                </button>
                                            </div>
                                            <div class="col-md-4">
                                                <button type="button"
                                                        class="w-100 btn btn-outline-primary"
                                                        @click="setButtonStyle('btn btn-outline-primary')">
                                                    Rounded
                                                </button>
                                            </div>
                                            <div class="col-md-4">
                                                <button type="button"
                                                        class="w-100 btn btn-outline-primary rounded-pill"
                                                        @click="setButtonStyle('btn btn-outline-primary rounded-pill')">
                                                    Pill
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <p class="text-body-3">Basic</p>
                                        <div class="row">
                                            <div class="col-md-4">
                                                <button type="button"
                                                        class="w-100 btn btn-outline-primary dotted-outline rounded-0"
                                                        @click="setButtonStyle('btn btn-outline-primary dotted-outline rounded-0')">
                                                    Square
                                                </button>
                                            </div>
                                            <div class="col-md-4">
                                                <button type="button"
                                                        class="w-100 btn btn-outline-primary dotted-outline"
                                                        @click="setButtonStyle('btn btn-outline-primary dotted-outline')">
                                                    Rounded
                                                </button>
                                            </div>
                                            <div class="col-md-4">
                                                <button type="button"
                                                        class="w-100 btn btn-outline-primary dotted-outline rounded-pill"
                                                        @click="setButtonStyle('btn btn-outline-primary dotted-outline rounded-pill')">
                                                    Pill
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade"
                         id="settings"
                         role="tabpanel"
                         aria-labelledby="settings-tab">
                        <biolink-settings-tab-content/>
                    </div>
                </div>
            </div>
            <div class="biolink-preview">
                <div class="preview-header">
                    <router-link to="/preview-biolinks" class="link">
                        <i class="feather-globe me-1"/>
                        https://belink.vebto.com/i8GT65
                    </router-link>
                    <div class="d-flex align-items-center">
                        <button type="button"
                                class="btn-icon btn-icon-transparent"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Copy link">
                            <copy-icon size="size-18"/>
                        </button>
                        <button type="button"
                                class="btn-icon btn-icon-transparent"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Copy qr code">
                            <qr-icon size="size-18"/>
                        </button>
                        <div class="dropdown" title="Share">
                            <button class="btn-icon btn-icon-transparent dropdown-toggle no-arrow"
                                    type="button"
                                    id="dropdownShare"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                <share-icon size="size-18"/>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end top-100 has-arrow top-right animate scaleIn"
                                aria-labelledby="dropdownShare">
                                <li><a class="dropdown-item" href="/public"><i class="feather-facebook me-2"/> Facebook</a>
                                </li>
                                <li><a class="dropdown-item" href="/public"><i class="feather-twitter me-2"/>
                                    Twitter</a></li>
                                <li><a class="dropdown-item" href="/public"><i class="feather-linkedin me-2"/> Linkedin</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="preview-content">
                    <div class="mobile-wrapper"
                         :style="`
                            color: ${appearanceList.font.color};
                            font-family: ${appearanceList.font.fontFamily};
                            background-color: ${appearanceList.background.color.value};
                            background-image: ${
                                 appearanceList.background.selectedBackgroundType === 'image' ?
                                 `url(${appearanceList.background.image.value})` :
                                 appearanceList.background.gradient.value
                            };
                        `">
                        <div class="mobile-wrapper-share">
                            <button type="button"
                                    class="biolink-preview-page-share-button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#shareModal">
                                <share-icon-two/>
                            </button>
                        </div>
                        <div class="d-flex flex-column align-items-stretch justify-content-center text-center"
                             v-for="(previewItem, previewItemIndex) in contentWidgetList"
                             :key="`preview-item-${previewItemIndex}`">
                            <div v-if="previewItem.type === 'Image' && previewItem.status" class="mb-3">
                                <img
                                    v-if="previewItem.content.src"
                                    width="60"
                                    height="60"
                                    :src="previewItem.content.src"
                                    class="rounded"
                                    alt="Image"
                                />
                            </div>
                            <div v-if="previewItem.type === 'Text' && previewItem.status" class="mb-3">
                                <h6 v-if="previewItem.content.title"
                                    :style="`font-family: ${appearanceList.font.fontFamily};`">
                                    {{ previewItem.content.title }}
                                </h6>
                                <p v-if="previewItem.content.description"
                                   class="mb-0"
                                   :style="`font-family: ${appearanceList.font.fontFamily};`">
                                    {{ previewItem.content.description }}
                                </p>
                            </div>
                            <div v-if="previewItem.type === 'Social links' && previewItem.status" class="mb-3">
                                <div v-if="previewItem.content.links" class="social-menu">
                                    <ul class="list-unstyled">
                                        <li v-for="(link, socialIndex) in previewItem.content.links"
                                            :key="`link-${socialIndex}`"
                                            :class="{'mb-1' : socialIndex !== previewItem.content.links.length -1}">
                                            <div class="link">
                                                <a :href="link.url" target="_blank">
                                                    <i v-if="link.type === 'Email'" class="feather-mail"/>
                                                    <i v-if="link.type === 'Facebook'" class="feather-facebook"/>
                                                    <i v-if="link.type === 'Twitter'" class="feather-twitter"/>
                                                    <i v-if="link.type === 'Instagram'" class="feather-instagram"/>
                                                    <i v-if="link.type === 'TikTok'" class="feather-music"/>
                                                    <i v-if="link.type === 'Youtube'" class="feather-youtube"/>
                                                    <i v-if="link.type === 'SoundCloud'" class="feather-cloud"/>
                                                    <i v-if="link.type === 'Basecamp'" class="feather-codepen"/>
                                                    <i v-if="link.type === 'Linkedin'" class="feather-linkedin"/>
                                                    <i v-if="link.type === 'WhatsApp'" class="feather-"/>
                                                    <i v-if="link.type === 'Telegram'" class="feather-phone"/>
                                                    <i v-if="link.type === 'Twitch'" class="feather-"/>
                                                    <i v-if="link.type === 'Patreon'" class="feather-mail"/>
                                                    <i v-if="link.type === 'Pinterest'" class="feather-map-pin"/>
                                                    <i v-if="link.type === 'Spotify'" class="feather-"/>
                                                    <i v-if="link.type === 'Amazon'" class="feather-"/>
                                                    <i v-if="link.type === 'Snapchat'" class="feather-"/>
                                                    <i v-if="link.type === 'Apple music'" class="feather-"/>
                                                    <span class="ms-3 text-capitalize">
                                                        {{ link.type }}
                                                    </span>
                                                </a>
                                                <a class="copy-icon"
                                                   href="/"
                                                   @click.prevent="copySocialLink('https://www.facebook.com/')">
                                                    <i class="feather-copy fs-6"/>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div v-if="previewItem.type === 'Link' && previewItem.status" class="mb-3">
                                <a :href="previewItem.content.newLink" :class="`${appearanceList.button.class}`">
                                    {{ previewItem.content.newLink }}
                                </a>
                            </div>
                            <div v-if="previewItem.type === 'Youtube video' && previewItem.status" class="mb-3">
                                <iframe
                                    width="100%"
                                    height="250"
                                    style="border-radius:12px"
                                    :src="loadYoutubeUrl(previewItem.content.url)"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                />
                            </div>
                            <div v-if="previewItem.type === 'Soundcloud video' && previewItem.status" class="mb-3">
                                <iframe
                                    width="100%"
                                    height="250"
                                    style="border-radius:12px"
                                    scrolling="no"
                                    frameborder="no"
                                    allow="autoplay"
                                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1301316112&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                                />
                            </div>
                            <div v-if="previewItem.type === 'Vimeo video' && previewItem.status" class="mb-3">
                                <div v-if="vimeoIframe" v-html="vimeoIframe"/>
                            </div>
                            <div v-if="previewItem.type === 'Spotify embed' && previewItem.status" class="mb-3">
                                <iframe
                                    v-if="spotifyIframeUrl"
                                    width="100%"
                                    height="380"
                                    style="border-radius:12px"
                                    :src="spotifyIframeUrl"
                                    frameBorder="0"
                                    allowfullscreen=""
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                />
                            </div>
                            <div v-if="previewItem.type === 'Twitch embed' && previewItem.status" class="mb-3">
                                <iframe
                                    src="https://clips.twitch.tv/embed?clip=InexpensiveFlirtyAlfalfaMoreCowbell-WlU5mMLVbIPJj9YW"
                                    frameborder="0"
                                    allowfullscreen="true"
                                    scrolling="no"
                                    height="250"
                                    width="100%"
                                />
                            </div>
                            <div v-if="previewItem.type === 'TikTok embed' && previewItem.status">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AddNewLInkModal @addNewLink="addNewLink"/>
            <AddWidgetModal/>
            <AddImageWidgetModal @addImageWidget="addImageWidget"/>
            <AddTextWidgetModal @addTextWidget="addTextWidget"/>
            <AddSocialLinksWidgetModal @addSocialLinkWidget="addSocialLinkWidget"/>
            <AddYoutubeVideoWidgetModal @addYoutubeWidget="addYoutubeWidget"/>
            <AddSoundcloudWidgetModal @addSoundcloudWidget="addSoundcloudWidget"/>
            <AddVimeoVideoWidgetModal @addVimeoWidget="addVimeoWidget"/>
            <AddSpotifyEmbedWidgetModal @addSpotifyWidget="addSpotifyWidget"/>
            <AddTwitchEmbedWidgetModal @addTwitchWidget="addTwitchWidget"/>
            <AddTiktokEmbedWidgetModal @addTiktokWidget="addTiktokWidget"/>
            <share-biolink-modal/>
        </div>
    </layout>
</template>

<script>
    import {computed, onMounted, ref} from 'vue';
    import axios from 'axios';
    import {Modal, Tooltip} from 'bootstrap';
    import draggable from 'vuedraggable';
    import CopyIcon from '@/components/icons/CopyIcon';
    import QrIcon from '@/components/icons/QrIcon';
    import ShareIcon from '@/components/icons/ShareIcon';
    import DragIcon from '@/components/icons/DragIcon';
    import AddNewLInkModal from '@/components/biolink/AddNewLInkModal';
    import AddWidgetModal from '@/components/biolink/AddWidgetModal';
    import AddImageWidgetModal from '@/components/biolink/AddImageWidgetModal';
    import AddTextWidgetModal from '@/components/biolink/AddTextWidgetModal';
    import AddSocialLinksWidgetModal from '@/components/biolink/AddSocialLinksWidgetModal';
    import AddYoutubeVideoWidgetModal from '@/components/biolink/AddYoutubeVideoWidgetModal';
    import AddSoundcloudWidgetModal from '@/components/biolink/AddSoundcloudWidgetModal';
    import AddVimeoVideoWidgetModal from '@/components/biolink/AddVimeoVideoWidgetModal';
    import AddSpotifyEmbedWidgetModal from '@/components/biolink/AddSpotifyEmbedWidgetModal';
    import AddTwitchEmbedWidgetModal from '@/components/biolink/AddTwitchEmbedWidgetModal';
    import AddTiktokEmbedWidgetModal from '@/components/biolink/AddTiktokEmbedWidgetModal';
    import ImageUploader from "@/components/uploader/ImageUploader";
    import Layout from "@/components/layouts/Layout";
    import BiolinkSettingsTabContent from "@/components/biolink/BiolinkSettingsTabContent";
    import ShareBiolinkModal from "@/components/biolink/ShareBiolinkModal";
    import ShareIconTwo from "@/components/icons/ShareIconTwo";
    import {copyToClipboard, sweetAlert} from "@/utilities/helpers";

    export default {
        name: 'BiolinksCreateView',
        components: {
            ShareIconTwo,
            ShareBiolinkModal,
            BiolinkSettingsTabContent,
            Layout,
            ImageUploader,
            AddTiktokEmbedWidgetModal,
            AddTwitchEmbedWidgetModal,
            AddSpotifyEmbedWidgetModal,
            AddVimeoVideoWidgetModal,
            AddSoundcloudWidgetModal,
            AddYoutubeVideoWidgetModal,
            AddSocialLinksWidgetModal,
            AddTextWidgetModal,
            AddImageWidgetModal,
            AddWidgetModal,
            DragIcon,
            AddNewLInkModal,
            ShareIcon,
            QrIcon,
            CopyIcon,
            draggable
        },
        display: 'Transition',
        order: 6,
        setup() {
            // Data
            const drag = ref(false);
            const contentWidgetList = ref([
                {
                    order: 1,
                    type: 'Image',
                    content: {
                        type: 'Avatar',
                        src: require(`@/assets/images/avatar.jpeg`),
                        destinationUrl: ''
                    },
                    status: true
                },
                {
                    order: 2,
                    type: 'Text',
                    content: {
                        title: 'Francois Brill',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                    },
                    status: true
                },
                {
                    order: 3,
                    type: 'Social links',
                    content: {
                        links: [
                            {type: 'Facebook', url: '#'},
                            {type: 'Instagram', url: '#'},
                            {type: 'Twitter', url: '#'},
                            {type: 'Linkedin', url: '#'},
                        ]
                    },
                    status: true
                }
            ]);
            const appearanceList = ref({
                background: {
                    color: {
                        value: '#a2ea8e'
                    },
                    gradient: {
                        value: `linear-gradient(rgb(242 255 237), rgb(236 255 238), rgb(228 255 242))`
                    },
                    image: {
                        value: ''
                    },
                    selectedBackgroundType: 'gradient'
                },
                font: {
                    color: '#00ab55',
                    fontFamily: ''
                },
                button: {
                    class: 'btn btn-primary',
                }
            });
            const backgroundImageList = ref([
                {src: require(`@/assets/images/svg-backgrounds/alternating-triangles.svg`)},
                {src: require(`@/assets/images/svg-backgrounds/angled-focus.svg`)},
                {src: require(`@/assets/images/svg-backgrounds/canyon-funnel.svg`)},
                {src: require(`@/assets/images/svg-backgrounds/circuit-board.svg`)},
                {src: require(`@/assets/images/svg-backgrounds/circular-focus.svg`)},
                {src: require(`@/assets/images/svg-backgrounds/confetti-doodles.svg`)},
                {src: require(`@/assets/images/svg-backgrounds/farseeing-eyeball.svg`)},
                {src: require(`@/assets/images/svg-backgrounds/hurricane-aperture.svg`)},
                {src: require(`@/assets/images/svg-backgrounds/icy-explosion.svg`)},
                {src: require(`@/assets/images/svg-backgrounds/launch-day.svg`)},
                {src: require(`@/assets/images/svg-backgrounds/looney-loops.svg`)},
                {src: require(`@/assets/images/svg-backgrounds/monstera-patch.svg`)},
                {src: require(`@/assets/images/svg-backgrounds/nuclear-focalpoint.svg`)},
                {src: require(`@/assets/images/svg-backgrounds/protruding-squares.svg`)},
                {src: require(`@/assets/images/svg-backgrounds/snow.svg`)},
                {src: require(`@/assets/images/svg-backgrounds/sprinkle.svg`)},
                {src: require(`@/assets/images/svg-backgrounds/threads-ahead.svg`)}
            ]);
            const googleFontList = ref([]);
            const vimeoIframe = ref(null);
            const spotifyIframeUrl = ref(null);

            // Computed Properties
            const dragOptions = computed(() => {
                return {
                    animation: 200,
                    group: "description",
                    disabled: false,
                    ghostClass: "ghost"
                }
            })

            // Methods
            const sort = () => {
                contentWidgetList.value = contentWidgetList.value.sort((a, b) => a.order - b.order);
            }
            const addNewLink = (value) => {
                contentWidgetList.value.push({
                    order: contentWidgetList.value.length + 1,
                    type: 'Link',
                    content: value,
                    status: true
                })
            }
            const addImageWidget = (value) => {
                contentWidgetList.value.push({
                    order: contentWidgetList.value.length + 1,
                    type: 'Image',
                    content: value,
                    status: true
                })
            }
            const addTextWidget = (value) => {
                contentWidgetList.value.push({
                    order: contentWidgetList.value.length + 1,
                    type: 'Text',
                    content: value,
                    status: true
                })
            }
            const addSocialLinkWidget = (value) => {
                console.log(value)
            }
            const addYoutubeWidget = (value) => {
                contentWidgetList.value.push({
                    order: contentWidgetList.value.length + 1,
                    type: 'Youtube video',
                    content: value,
                    status: true
                })
            }
            const addSoundcloudWidget = (value) => {
                contentWidgetList.value.push({
                    order: contentWidgetList.value.length + 1,
                    type: 'Soundcloud video',
                    content: value,
                    status: true
                })
            }
            const addVimeoWidget = (value) => {
                loadVimeoVideo(value.url);
                contentWidgetList.value.push({
                    order: contentWidgetList.value.length + 1,
                    type: 'Vimeo video',
                    content: value,
                    status: true
                })
            }
            const addSpotifyWidget = (value) => {
                loadSpotifyVideo(value.url);
                contentWidgetList.value.push({
                    order: contentWidgetList.value.length + 1,
                    type: 'Spotify embed',
                    content: value,
                    status: true
                })
            }
            const addTwitchWidget = (value) => {
                contentWidgetList.value.push({
                    order: contentWidgetList.value.length + 1,
                    type: 'Twitch embed',
                    content: value,
                    status: true
                })
            }
            const addTiktokWidget = (value) => {
                contentWidgetList.value.push({
                    order: contentWidgetList.value.length + 1,
                    type: 'TikTok embed',
                    content: value,
                    status: true
                })
            }
            const getCustomBackground = (value) => {
                console.log(value);
            }
            const setBackground = (type, value) => {
                appearanceList.value.background.selectedBackgroundType = type;

                if (type === 'color') {
                    appearanceList.value.background.image.value = '';
                    appearanceList.value.background.gradient.value = '';
                } else if (type === 'image') {
                    appearanceList.value.background.image.value = value;
                } else if (type === 'gradient') {
                    appearanceList.value.background.gradient.value = value;
                }
            }
            const getGoogleFonts = () => {
                axios.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyB8u5MLDmT-U2wGFfIjM_WizG1I1U4Z1AE')
                    .then((response) => {
                        googleFontList.value = response.data;
                        googleFontLoader();
                    })
                    .catch((error) => {
                        console.log(error)
                    });

            }
            const googleFontLoader = () => {
                googleFontList.value.items?.map((font) => {
                    let link = document.createElement('link');
                    link.type = 'text/css';
                    link.rel = 'stylesheet';

                    document.head.appendChild(link);

                    link.href = `https://fonts.googleapis.com/css?family=${font.family}&display=swap`;
                });
            }
            const setFont = (font) => {
                appearanceList.value.font.fontFamily = font;
            }
            const setButtonStyle = (style) => {
                appearanceList.value.button.class = style
            }
            const openWidgetModal = (type) => {
                const imageWidgetModal = new Modal(document.getElementById('imageWidgetModal')),
                    textWidgetModal = new Modal(document.getElementById('textWidgetModal')),
                    socialLinksWidgetModal = new Modal(document.getElementById('socialLinksWidgetModal')),
                    youtubeVideoWidgetModal = new Modal(document.getElementById('youtubeVideoWidgetModal')),
                    soundcloudVideoWidgetModal = new Modal(document.getElementById('soundcloudVideoWidgetModal')),
                    vimeoVideoWidgetModal = new Modal(document.getElementById('vimeoVideoWidgetModal')),
                    spotifyWidgetModal = new Modal(document.getElementById('spotifyWidgetModal')),
                    twitchWidgetModal = new Modal(document.getElementById('twitchWidgetModal')),
                    tiktokWidgetModal = new Modal(document.getElementById('tiktokWidgetModal'));

                if (type === 'Image') {
                    imageWidgetModal?.show();
                } else if (type === 'Text') {
                    textWidgetModal?.show();
                } else if (type === 'Social links') {
                    socialLinksWidgetModal?.show();
                } else if (type === 'Youtube video') {
                    youtubeVideoWidgetModal?.show();
                } else if (type === 'Soundcloud video') {
                    soundcloudVideoWidgetModal?.show();
                } else if (type === 'Vimeo video') {
                    vimeoVideoWidgetModal?.show();
                } else if (type === 'Spotify embed') {
                    spotifyWidgetModal?.show();
                } else if (type === 'Twitch embed') {
                    twitchWidgetModal?.show();
                } else if (type === 'TikTok embed') {
                    tiktokWidgetModal?.show();
                }
            }
            const removeWidget = (index) => {
                contentWidgetList.value.splice(index, 1)
            }

            // Embed Youtube Video
            const loadYoutubeUrl = (youtubeURL) => {
                const youtubeEmbedTemplate = 'https://www.youtube.com/embed/',
                    url = youtubeURL.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/),
                    YId = undefined !== url[2] ? url[2].split(/[^0-9a-z_/\\-]/i)[0] : url[0],
                    generatedUrl = youtubeEmbedTemplate.concat(YId);

                return generatedUrl;
            }

            // Embed Soundcloud Video
            /*const loadSoundcloudVideo = () => {

            }*/


            // Embed Vimeo Video
            const loadVimeoVideo = (url) => {
                axios.get(`https://vimeo.com/api/oembed.json?url=${url}`)
                    .then((response) => {
                        vimeoIframe.value = response.data.html;
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            }

            // Embed Spotify Video
            const loadSpotifyVideo = (url) => {
                const last = url.substring(url.lastIndexOf('/') + 1, url.length);
                const generatedUrl = `https://open.spotify.com/embed/track/${last}?utm_source=generator`
                spotifyIframeUrl.value = generatedUrl;
            }

            // Embed Twitch Video
            /*const loadTwitchVideo = (url) => {

            }*/

            const copySocialLink = (link) => {
                copyToClipboard(link);
                sweetAlert('success', 'Copied link successfully');
            }

            // Mounted hook
            onMounted(() => {
                new Tooltip(document.body, {
                    selector: "[data-bs-toggle='tooltip']",
                });
                getGoogleFonts();
            })

            return {
                drag,
                contentWidgetList,
                dragOptions,
                appearanceList,
                backgroundImageList,
                googleFontList,
                vimeoIframe,
                spotifyIframeUrl,
                sort,
                addNewLink,
                addImageWidget,
                addTextWidget,
                addSocialLinkWidget,
                addYoutubeWidget,
                addSoundcloudWidget,
                addVimeoWidget,
                addSpotifyWidget,
                addTwitchWidget,
                addTiktokWidget,
                getCustomBackground,
                setBackground,
                setFont,
                setButtonStyle,
                openWidgetModal,
                removeWidget,
                loadYoutubeUrl,
                copySocialLink
            }
        }
    }
</script>

<style>
    .ghost {
        opacity: 0.5;
        background: #c8ebfb;
    }
</style>