import $ from "jquery";
import "popper.js";
import "bootstrap";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document"

import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

$(document).ready(() => {
  console.log(DecoupledEditor)
  DecoupledEditor
    .create( document.querySelector( '#editor' ) )
    .then( editor => {
        console.log( 'Editor was initialized', editor );

        // Append the toolbar to the <body> element.
        document.body.appendChild( editor.ui.view.toolbar.element );
    } )
    .catch( err => {
        console.error( err.stack );
    } );
});
