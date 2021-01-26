(function() {var implementors = {};
implementors["diem_validator_interface"] = [{"text":"impl&lt;'a&gt; StateView for DebuggerStateView&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["diem_vm"] = [{"text":"impl&lt;'block&gt; StateView for StateViewCache&lt;'block&gt;","synthetic":false,"types":[]}];
implementors["language_e2e_tests"] = [{"text":"impl StateView for FakeDataStore","synthetic":false,"types":[]}];
implementors["resource_viewer"] = [{"text":"impl StateView for NullStateView","synthetic":false,"types":[]}];
implementors["storage_interface"] = [{"text":"impl&lt;'a&gt; StateView for VerifiedStateView&lt;'a&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()