(function() {var implementors = {};
implementors["diem_vm"] = [{"text":"impl&lt;'block&gt; RemoteCache for StateViewCache&lt;'block&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a, S:&nbsp;StateView&gt; RemoteCache for RemoteStorage&lt;'a, S&gt;","synthetic":false,"types":[]}];
implementors["language_e2e_tests"] = [{"text":"impl RemoteCache for FakeDataStore","synthetic":false,"types":[]}];
implementors["move_cli"] = [{"text":"impl RemoteCache for OnDiskStateView","synthetic":false,"types":[]}];
implementors["move_vm_test_utils"] = [{"text":"impl RemoteCache for BlankStorage","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b, S:&nbsp;RemoteCache&gt; RemoteCache for DeltaStorage&lt;'a, 'b, S&gt;","synthetic":false,"types":[]},{"text":"impl RemoteCache for InMemoryStorage","synthetic":false,"types":[]}];
implementors["resource_viewer"] = [{"text":"impl RemoteCache for NullStateView","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()