import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
export interface TreeNode {
  name: string;
  children?: TreeNode[];
}

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent {
  @Input() node!: TreeNode;

  @Output() selectionEvent = new EventEmitter<boolean>();

  @ViewChildren(TreeNodeComponent) childNodes!: QueryList<TreeNodeComponent>;

  isSelected: boolean = false;

  constructor() { }

  toggleSelection(state: boolean, emitEvent = true) {
    this.isSelected = state;

    if (emitEvent) {
      this.selectionEvent.emit(this.isSelected);
    }
    //console.log(this.childNodes.toArray())
    this.childNodes?.forEach((childNode) => { childNode.toggleSelection(state, false); });
  }

  onChildSelectionEvent(isChildSelected: boolean) {
    //console.log(isChildSelected)
    const childNodes = this.childNodes.toArray();
    // console.log(childNodes)
    const areSomeNodesSelected = childNodes.some((node) => node.isSelected);
    const isChildUnselected = !isChildSelected;
    //console.log(childNodes, 'areSomeNodesSelected:', areSomeNodesSelected, ',isChildUnselected:', isChildUnselected)
    // (P:selected) child nodes -> [x:selected, y:selected, z:selected]
    // z:unselected event
    // because x and y are already in selected state, P cannot go into unselected state
    // (P:selected) child nodes -> [x:selected, y:selected, z:uselected]
    if (areSomeNodesSelected && isChildUnselected) {
      return;
    }
    //console.log('here--' ,this.node.name)
    this.isSelected = isChildSelected;
    this.selectionEvent.emit(this.isSelected);
  }
}
