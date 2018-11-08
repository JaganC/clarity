/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { InfiniteTree } from '../utils/infinite-tree';

@Component({
  selector: 'clr-lazy-recursive-tree-demo',
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: './lazy-recursive-tree.html',
})
export class LazyRecursiveTreeDemo {
  tree = new InfiniteTree(3);

  synchronousChildren = (node: string) => this.tree.getChildren(node);
}