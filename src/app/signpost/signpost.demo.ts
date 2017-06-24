/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "clr-signpost-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: [ "./signpost.demo.css" ],
    templateUrl: "signpost.demo.html"
})

export class SignpostDemo {

    openState: boolean = false;
    positions = [
        {
            description: "Top left",
            position: "top-left",
            id: "topLeftTrigger"
        }, {
            description: "Top middle",
            position: "top-middle",
            id: "topMiddleTrigger"
        }, {
            description: "Top right",
            position: "top-right",
            id: "topRightTrigger"
        }, {
            description: "Right top",
            position: "right-top",
            id: "rightTopTrigger"
        }, {
            description: "Right middle",
            position: "right-middle",
            id: "rightMiddleTrigger"
        }, {
            description: "Right bottom",
            position: "right-bottom",
            id: "rightBottomTrigger"
        }, {
            description: "Bottom left",
            position: "bottom-left",
            id: "bottomLeftTrigger"
        }, {
            description: "Bottom middle",
            position: "bottom-middle",
            id: "bottomMiddleTrigger"
        }, {
            description: "Bottom right",
            position: "bottom-right",
            id: "bottomRightTrigger"
        }, {
            description: "Left top",
            position: "left-top",
            id: "leftTopTrigger"
        }, {
            description: "Left middle",
            position: "left-middle",
            id: "leftMiddleTrigger"
        }, {
            description: "Left bottom",
            position: "left-bottom",
            id: "leftBottomTrigger"
        }
    ];
}