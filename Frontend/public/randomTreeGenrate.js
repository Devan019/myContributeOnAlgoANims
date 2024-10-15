import { BinaryTreeNode } from "binary-tree-visualizer";


function isNotPresent(arr, no) {
    return !arr.includes(no)
}

function randomNo(prevArry, Try) {
    let no = Math.ceil(Math.random() * 100);
    while (Try-- > 0) {
        if (isNotPresent(prevArry, no)) {
            break;
        }
        no = Math.ceil(Math.random() * 100);
    }
    return no;
}

function randomTreeGenrate() {
    // let height = Math.ceil(Math.random()*3);
    let first_level = 1;
    let second_level = 2 //1 or 2
    let third_level = Math.ceil(Math.random() * second_level * 2);
    let forth_level = Math.ceil(Math.random() * third_level * 2);
    let Try = 1000;
    let no = Math.ceil(Math.random() * 100);
    let prevArry = [no];

    const root = new BinaryTreeNode(no);

    let totalNodes = second_level + third_level + forth_level;

    let idx = 0;
    while (second_level-- > 0) {
        no = randomNo(prevArry, Try);
        if (idx == 0) {
            root.left = new BinaryTreeNode(no)
        } else {
            root.right = new BinaryTreeNode(no)
        }

        idx++;
        prevArry.push(no);
        Try = 1000;

    }

    idx = 0;
    let idx2 = 0;
    while (third_level-- > 0) {
        no = randomNo(prevArry, Try);
        prevArry.push(no);

        if (idx > 1) {
            idx2++;
            idx = 0;
        }
        if (idx2 == 1) {
            if (idx == 0 && root.left) {
                root.left.left = new BinaryTreeNode(no)
            } else {
                root.left.right = new BinaryTreeNode(no)
            }
        } else if (root.right) {
            if (idx == 0) {
                root.right.left = new BinaryTreeNode(no)
            } else {
                root.right.right = new BinaryTreeNode(no)
            }
        }

        idx++;
        Try = 1000;
    }

    idx = 0;
    idx2 = 0;
    let idx3 = 0;
    while (forth_level-- > 0) {
        no = randomNo(prevArry, Try);
        prevArry.push(no)

        if (idx > 1) {
            idx = 0;
            idx2++;
        }
        if (idx2 > 1) {
            idx2 = 0;
            idx3++;
        }

        if (idx3 == 0) {
            if (idx2 == 0 && root.left.left) {
                if (idx == 0)
                    root.left.left.left = new BinaryTreeNode(no);
                else
                    root.left.left.right = new BinaryTreeNode(no);
            } else if (root.left.right) {
                if (idx == 0)
                    root.left.right.left = new BinaryTreeNode(no);
                else
                    root.left.right.right = new BinaryTreeNode(no);
            }
        } else if (root.right) {
            if (idx2 == 0 && root.right.left) {
                if (idx == 0)
                    root.right.left.left = new BinaryTreeNode(no);
                else
                    root.right.left.right = new BinaryTreeNode(no);
            } else if (root.right.right) {
                if (idx == 0)
                    root.right.right.left = new BinaryTreeNode(no);
                else
                    root.right.right.right = new BinaryTreeNode(no);
            }
        }


        idx++;
        Try = 1000;

    }

    return root;
}


export default randomTreeGenrate
