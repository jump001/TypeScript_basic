
//ในts สามารถexten ได้

interface Website {
  url: string;
}

interface Article {
  title: string;
  content: string;
}

interface BlogPost extends Website, Article {
  //สามารถextends ได้มากกว่าหนึ่ง
  view: number; //และเพิ่มได้
}

const post: BlogPost = {
  //ตัวอย่างการประกาศตัวแปรทีextendsมา
  url: "goolgle.com",
  title: "aaaaaaa",


  content: "dfsadf",
  view: 33,
}
