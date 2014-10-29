This version of node-zookeeper contains a bundled dependency of Apache Zookeeper that has been patched to fix install issues on OSX Yosemite.

This fixes an issue in which Yosemite has symbol conflicts with Zookeeper by aliasing the Zookeeper symbols. See https://issues.apache.org/jira/browse/ZOOKEEPER-2049 for more details. The patch applied is https://issues.apache.org/jira/secure/attachment/12673210/ZOOKEEPER-2049.noprefix.branch-3.4.patch.

This patch has been applied to the stock Zookeeper 3.4.6 tarball. Found on an Apache mirror such as: http://apache.arvixe.com/zookeeper/zookeeper-3.4.6/zookeeper-3.4.6.tar.gz
