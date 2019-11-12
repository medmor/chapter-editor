import $ from "jquery";
import "popper.js";
import "bootstrap";
// @ts-ignore
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document"

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

$(document).ready(() => {
DecoupledEditor
    .create( document.querySelector( '.document-editor__editable' ), {
    } )
    .then( editor => {
        const toolbarContainer = document.querySelector( '.document-editor__toolbar' );

        toolbarContainer.appendChild( editor.ui.view.toolbar.element );

    } )
    .catch( err => {
        console.error( err );
    } );
});
